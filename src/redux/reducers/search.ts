import { LocationAction, SET_LOCATION } from "../actions/location";
import { combineReducers } from "redux";
import { Location } from "../../interfaces/location";
import { FETCH_SUGGESTIONS_SUCCESS, SuggestionsAction } from "../actions/suggestions";

function locationReducer(state: string = "", action: LocationAction): string {
    const {
        type,
        payload: { location },
    } = action;

    switch (type) {
        case SET_LOCATION:
            return location;
        default:
            return state;
    }
}

function suggestionsReducer(state: Location[] = [], action: SuggestionsAction): Location[] {
    const {
        type,
        payload: { suggestions },
    } = action;

    switch (type) {
        case FETCH_SUGGESTIONS_SUCCESS:
            return suggestions;
        default:
            return state;
    }
}

const searchReducer = combineReducers({
    location: locationReducer,
    suggestions: suggestionsReducer,
});

export default searchReducer;
