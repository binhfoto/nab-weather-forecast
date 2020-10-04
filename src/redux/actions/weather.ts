import { Action } from "../../interfaces/action";
import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import { ErrorWrapper, ErrorPayload } from "../../interfaces/error";

export const FETCH_WEATHERS_ON_LOCATION_REQUEST = "FETCH_WEATHERS_ON_LOCATION_REQUEST";
export const FETCH_WEATHERS_ON_LOCATION_SUCCESS = "FETCH_WEATHERS_ON_LOCATION_SUCCESS";
export const FETCH_WEATHERS_ON_LOCATION_FAILED = "FETCH_WEATHERS_ON_LOCATION_FAILED";

export interface FetchWeathersOnLocationRequestPayload {
    locationId: number;
}

export interface FetchWeathersOnLocationSuccessPayload {
    weathersOnLocation: WeathersOnLocation;
}

export interface WeathersOnLocationRequestAction extends Action<FetchWeathersOnLocationRequestPayload> {}
export interface WeathersOnLocationSuccessAction extends Action<FetchWeathersOnLocationSuccessPayload> {}
export interface WeathersOnLocationFailedAction extends Action<ErrorPayload> {}

export function fetchWeathersOnLocationRequest(locationId: number): WeathersOnLocationRequestAction {
    return {
        type: FETCH_WEATHERS_ON_LOCATION_REQUEST,
        payload: { locationId },
    };
}

export function fetchWeathersOnLocationSuccess(
    weathersOnLocation: WeathersOnLocation,
): WeathersOnLocationSuccessAction {
    return {
        type: FETCH_WEATHERS_ON_LOCATION_SUCCESS,
        payload: {
            weathersOnLocation,
        },
    };
}

export function fetchWeathersOnLocationFailed(error: ErrorWrapper): WeathersOnLocationFailedAction {
    return {
        type: FETCH_WEATHERS_ON_LOCATION_FAILED,
        payload: { error },
    };
}
