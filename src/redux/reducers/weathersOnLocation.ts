import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import { FETCH_WEATHERS_ON_LOCATION_SUCCESS, WeathersOnLocationSuccessAction } from "../actions/weather";

export default function weathersOnLocationsReducer(
    state: WeathersOnLocation[] = [],
    action: WeathersOnLocationSuccessAction,
): WeathersOnLocation[] {
    switch (action.type) {
        case FETCH_WEATHERS_ON_LOCATION_SUCCESS:
            return [action.payload.weathersOnLocation, ...state];
        default:
            return state;
    }
}
