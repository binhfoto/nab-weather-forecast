import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import { FETCH_WEATHERS_ON_LOCATION_SUCCESS, WeathersOnLocationSuccessAction } from "../actions/weather";

export default function weathersOnLocationsReducer(
    state: WeathersOnLocation[] = [],
    action: WeathersOnLocationSuccessAction,
): WeathersOnLocation[] {
    const {
        type,
        payload: { weathersOnLocation },
    } = action;

    switch (type) {
        case FETCH_WEATHERS_ON_LOCATION_SUCCESS:
            return [weathersOnLocation, ...state];
        default:
            return state;
    }
}
