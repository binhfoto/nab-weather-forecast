import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import searchLocationWatcher from "./search";
import {
    fetchSuggestionsFailedAction,
    fetchSuggestionsRequestAction,
    fetchSuggestionsSuccessAction,
} from "../actions/suggestions";
import { searchLocation as searchLocationApi } from "../../apis";
import { isProcessingAction } from "../actions/processing";

describe("search saga", () => {
    it("should search city successfully", () => {
        return expectSaga(searchLocationWatcher)
            .provide([
                [
                    call(searchLocationApi, "Ho Chi Minh"),
                    [
                        {
                            title: "Ho Chi Minh City",
                            locationType: "City",
                            id: 1252431,
                        },
                    ],
                ],
            ])
            .put(isProcessingAction(true))
            .call(searchLocationApi, "Ho Chi Minh")
            .put(
                fetchSuggestionsSuccessAction([
                    {
                        title: "Ho Chi Minh City",
                        locationType: "City",
                        id: 1252431,
                    },
                ]),
            )
            .put(isProcessingAction(false))
            .dispatch(fetchSuggestionsRequestAction("Ho Chi Minh"))
            .run();
    });

    it("should search city failed", () => {
        const error = new Error("error");
        return expectSaga(searchLocationWatcher)
            .provide([[call(searchLocationApi, "Ho Chi Minh"), throwError(error)]])
            .put(isProcessingAction(true))
            .put(fetchSuggestionsFailedAction(error))
            .put(isProcessingAction(false))
            .dispatch(fetchSuggestionsRequestAction("Ho Chi Minh"))
            .run();
    });
});
