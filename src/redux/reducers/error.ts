import { ErrorAction, ErrorWrapper } from "../../interfaces/error";
import { FETCH_SUGGESTIONS_FAILED } from "../actions/suggestions";
import { FETCH_WEATHERS_ON_LOCATION_FAILED } from "../actions/weather";

export default function errorReducer(state: ErrorWrapper | null = null, action: ErrorAction) {
    switch (action.type) {
        case FETCH_SUGGESTIONS_FAILED:
        case FETCH_WEATHERS_ON_LOCATION_FAILED:
            return action.payload.error;
        default:
            return state;
    }
}
