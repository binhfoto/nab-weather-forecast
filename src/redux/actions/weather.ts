import { Action } from "../../interfaces/action";
import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";

export const ADD_WEATHERS_ON_LOCATION = "ADD_WEATHERS_ON_LOCATION";

export interface WeathersOnLocationPayload {
    weathersOnLocation: WeathersOnLocation;
}

export interface WeathersOnLocationAction extends Action<WeathersOnLocationPayload> {}

export function addWeathersOnLocation(weathersOnLocation: WeathersOnLocation): WeathersOnLocationAction {
    return {
        type: ADD_WEATHERS_ON_LOCATION,
        payload: {
            weathersOnLocation,
        },
    };
}
