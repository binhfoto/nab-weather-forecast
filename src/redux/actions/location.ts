import { Action } from "../../interfaces/action";

export const SET_LOCATION = "SET_LOCATION";

export interface LocationPayload {
    location: string;
}

export interface LocationAction extends Action<LocationPayload> {}

export function setLocationAction(location: string): LocationAction {
    return {
        type: SET_LOCATION,
        payload: {
            location,
        },
    };
}
