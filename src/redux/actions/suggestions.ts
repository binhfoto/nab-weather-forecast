import { Action } from "../../interfaces/action";
import { Location } from "../../interfaces/location";
import { ErrorWrapper, ErrorPayload } from "../../interfaces/error";

export const FETCH_SUGGESTIONS_REQUEST = "FETCH_SUGGESTIONS_REQUEST";
export const FETCH_SUGGESTIONS_SUCCESS = "FETCH_SUGGESTIONS_SUCCESS";
export const FETCH_SUGGESTIONS_FAILED = "FETCH_SUGGESTIONS_FAILED";

export const CLEAR_SUGGESTIONS = "CLEAR_SUGGESTIONS";

export interface SuggestionsRequestPayload {
    location: string;
}

export interface SuggestionsPayload {
    suggestions: Location[];
}

export interface SuggestionsRequestAction extends Action<SuggestionsRequestPayload> {}
export interface SuggestionsAction extends Action<SuggestionsPayload> {}
export interface SuggestionsFailedAction extends Action<ErrorPayload> {}

export function fetchSuggestionsRequestAction(location: string): SuggestionsRequestAction {
    return {
        type: FETCH_SUGGESTIONS_REQUEST,
        payload: {
            location,
        },
    };
}

export function fetchSuggestionsSuccessAction(suggestions: Location[]): SuggestionsAction {
    return {
        type: FETCH_SUGGESTIONS_SUCCESS,
        payload: {
            suggestions,
        },
    };
}

export function fetchSuggestionsFailedAction(error: ErrorWrapper): SuggestionsFailedAction {
    return {
        type: FETCH_SUGGESTIONS_FAILED,
        payload: {
            error,
        },
    };
}

export function clearSuggestionsAction(): SuggestionsAction {
    return {
        type: CLEAR_SUGGESTIONS,
        payload: {
            suggestions: [],
        },
    };
}
