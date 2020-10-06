import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import weathersOnLocationWatcher from "./weathersOnLocation";
import {
    fetchWeathersOnLocationFailed,
    fetchWeathersOnLocationRequest,
    fetchWeathersOnLocationSuccess,
} from "../actions/weather";
import { isProcessingAction } from "../actions/processing";
import { getWeatherOnLocation as getWeatherOnLocationApi } from "../../apis";

describe("weathersOnLocations saga", () => {
    it("should fetch weathers on location successfully", () => {
        return expectSaga(weathersOnLocationWatcher)
            .provide([
                [
                    call(getWeatherOnLocationApi, 123),
                    { locationId: 123, locationTitle: "Ho Chi Minh", weathers: [] },
                ],
            ])
            .put(isProcessingAction(false))
            .call(getWeatherOnLocationApi, 123)
            .put(
                fetchWeathersOnLocationSuccess({
                    locationId: 123,
                    locationTitle: "Ho Chi Minh",
                    weathers: [],
                }),
            )
            .put(isProcessingAction(true))
            .dispatch(fetchWeathersOnLocationRequest(123))
            .run();
    });

    it("should fetch weathers on location failed", () => {
        const error = new Error("error");
        return expectSaga(weathersOnLocationWatcher)
            .provide([[call(getWeatherOnLocationApi, 123), throwError(error)]])
            .put(isProcessingAction(false))
            .put(fetchWeathersOnLocationFailed(error))
            .put(isProcessingAction(true))
            .dispatch(fetchWeathersOnLocationRequest(123))
            .run();
    });
});
