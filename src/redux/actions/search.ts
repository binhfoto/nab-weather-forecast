import { Action } from "../../interfaces/action";
import { Location } from "../../interfaces/location";

export const SET_LOCATION = "SET_LOCATION";
export const SET_SUGGESTIONS = "SET_SUGGESTIONS";

export type LocationPayload = {
    location: string;
};

export type SuggestionsPayload = {
    suggestions: Location[];
};

export interface LocationAction extends Action<LocationPayload> {}

export interface SuggestionsAction extends Action<SuggestionsPayload> {}

export function setLocationAction(location: string): LocationAction {
    return {
        type: SET_LOCATION,
        payload: {
            location,
        },
    };
}

export function setSuggestionsAction(suggestions: Location[]): SuggestionsAction {
    return {
        type: SET_SUGGESTIONS,
        payload: {
            suggestions,
        },
    };
}
