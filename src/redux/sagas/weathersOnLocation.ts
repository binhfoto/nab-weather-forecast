import { takeEvery, call, put } from "redux-saga/effects";

import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import { getWeatherOnLocation as getWeatherOnLocationApi } from "../../apis";
import {
    FETCH_WEATHERS_ON_LOCATION_REQUEST,
    WeathersOnLocationRequestAction,
    fetchWeathersOnLocationFailed,
    fetchWeathersOnLocationSuccess,
} from "../actions/weather";

function* weathersOnLocation(action: WeathersOnLocationRequestAction) {
    try {
        const {
            payload: { locationId },
        } = action;

        const weathersOnLocation: WeathersOnLocation = yield call(getWeatherOnLocationApi, locationId);
        put(fetchWeathersOnLocationSuccess(weathersOnLocation));
    } catch (error) {
        put(fetchWeathersOnLocationFailed(error));
    }
}

export default function weathersOnLocationWatcher() {
    takeEvery(FETCH_WEATHERS_ON_LOCATION_REQUEST, weathersOnLocation);
}
