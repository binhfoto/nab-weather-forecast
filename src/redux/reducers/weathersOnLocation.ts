import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import { ADD_WEATHERS_ON_LOCATION, WeathersOnLocationAction } from "../actions/weather";

export default function weathersOnLocationsReducer(
    state: WeathersOnLocation[] = [],
    action: WeathersOnLocationAction,
): WeathersOnLocation[] {
    const {
        type,
        payload: { weathersOnLocation },
    } = action;

    switch (type) {
        case ADD_WEATHERS_ON_LOCATION:
            return [weathersOnLocation, ...state];
        default:
            return state;
    }
}
