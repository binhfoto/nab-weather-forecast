import { takeEvery, call, put } from "redux-saga/effects";

import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import { getWeatherOnLocation as getWeatherOnLocationApi } from "../../apis";
import {
    FETCH_WEATHERS_ON_LOCATION_REQUEST,
    WeathersOnLocationRequestAction,
    fetchWeathersOnLocationFailed,
    fetchWeathersOnLocationSuccess,
} from "../actions/weather";
import { isProcessingAction } from "../actions/processing";

function* weathersOnLocation(action: WeathersOnLocationRequestAction) {
    try {
        const {
            payload: { locationId },
        } = action;

        yield put(isProcessingAction(true));

        const weathersOnLocation: WeathersOnLocation = yield call(getWeatherOnLocationApi, locationId);
        yield put(fetchWeathersOnLocationSuccess(weathersOnLocation));
    } catch (error) {
        yield put(fetchWeathersOnLocationFailed(error));
    } finally {
        yield put(isProcessingAction(false));
    }
}

export default function* weathersOnLocationWatcher() {
    yield takeEvery(FETCH_WEATHERS_ON_LOCATION_REQUEST, weathersOnLocation);
}
