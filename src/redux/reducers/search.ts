import { LocationAction, SET_LOCATION } from "../actions/location";
import { combineReducers } from "redux";
import { Location } from "../../interfaces/location";
import { CLEAR_SUGGESTIONS, FETCH_SUGGESTIONS_SUCCESS, SuggestionsAction } from "../actions/suggestions";

function locationReducer(state: string = "", action: LocationAction): string {
    switch (action.type) {
        case SET_LOCATION:
            return action.payload.location;
        default:
            return state;
    }
}

function suggestionsReducer(state: Location[] = [], action: SuggestionsAction): Location[] {
    switch (action.type) {
        case CLEAR_SUGGESTIONS:
        case FETCH_SUGGESTIONS_SUCCESS:
            return action.payload.suggestions;
        default:
            return state;
    }
}

const searchReducer = combineReducers({
    location: locationReducer,
    suggestions: suggestionsReducer,
});

export default searchReducer;
