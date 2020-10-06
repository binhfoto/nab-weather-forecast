import { takeLatest, call, put } from "redux-saga/effects";

import { searchLocation as searchLocationApi } from "../../apis";
import { Location } from "../../interfaces/location";
import {
    FETCH_SUGGESTIONS_REQUEST,
    SuggestionsRequestAction,
    fetchSuggestionsSuccessAction,
    fetchSuggestionsFailedAction,
} from "../actions/suggestions";
import { isProcessingAction } from "../actions/processing";

function* searchLocation(action: SuggestionsRequestAction) {
    try {
        const {
            payload: { location },
        } = action;

        yield put(isProcessingAction(true));

        const suggestions: Location[] = yield call(searchLocationApi, location);

        yield put(fetchSuggestionsSuccessAction(suggestions));
    } catch (error) {
        yield put(fetchSuggestionsFailedAction(error));
    } finally {
        yield put(isProcessingAction(false));
    }
}

export default function* searchLocationWatcher() {
    yield takeLatest(FETCH_SUGGESTIONS_REQUEST, searchLocation);
}
