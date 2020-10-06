import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autosuggest, {
    ChangeEvent,
    SuggestionSelectedEventData,
    SuggestionsFetchRequestedParams,
} from "react-autosuggest";
import debounce from "lodash/debounce";

import "../styles/autoSuggest.css";

import { Location } from "../interfaces/location";
import searchSelector from "../redux/selectors/search";
import { setLocationAction } from "../redux/actions/location";
import { fetchSuggestionsRequestAction, clearSuggestionsAction } from "../redux/actions/suggestions";
import { fetchWeathersOnLocationRequest } from "../redux/actions/weather";

function getSuggestionValue(suggestion: Location): string {
    const { title } = suggestion;
    return title;
}

function renderSuggestion(suggestion: Location): JSX.Element {
    const { title } = suggestion;
    return <div>{title}</div>;
}

export default function Search() {
    const dispatch = useDispatch();
    const { location: value, suggestions = [] } = useSelector(searchSelector);

    const inputProps = {
        placeholder: "Search city over the world",
        value,
        onChange: handleLocationChange,
    };

    const fetchingSuggestions = useCallback(
        debounce((location) => {
            dispatch(fetchSuggestionsRequestAction(location));
        }, 500),
        [],
    );

    function handleLocationChange(_event: React.FormEvent, params: ChangeEvent) {
        const { newValue: location } = params;
        dispatch(setLocationAction(location));
    }

    function handleSuggestionsFetchRequested(request: SuggestionsFetchRequestedParams) {
        const { value: location, reason } = request;
        if (reason === "input-changed") {
            fetchingSuggestions(location);
        }
    }

    function handleSuggestionsClearRequested() {
        if (suggestions.length) {
            dispatch(clearSuggestionsAction());
        }
    }

    function handleSuggestionSelected(_event: React.FormEvent, data: SuggestionSelectedEventData<Location>) {
        const {
            suggestion: { id: locationId },
        } = data;
        dispatch(fetchWeathersOnLocationRequest(locationId));
    }

    const renderInputComponent = (inputProps: any) => (
        <div className="inputContainer">
            <img className="icon" src="https://img.icons8.com/pastel-glyph/128/000000/search--v1.png" alt="loading"/>
            <input {...inputProps} />
        </div>
    );

    return (
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
            onSuggestionsClearRequested={handleSuggestionsClearRequested}
            onSuggestionSelected={handleSuggestionSelected}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            renderInputComponent={renderInputComponent}
        />
    );
}
