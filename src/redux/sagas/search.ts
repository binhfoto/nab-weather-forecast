import { takeLatest, call, put } from "redux-saga/effects";

import { searchLocation as searchLocationApi } from "../../apis";
import { Location } from "../../interfaces/location";
import {
    FETCH_SUGGESTIONS_REQUEST,
    SuggestionsRequestAction,
    fetchSuggestionsSuccessAction,
    fetchSuggestionsFailedAction,
} from "../actions/suggestions";

function* searchLocation(action: SuggestionsRequestAction) {
    try {
        const {
            payload: { location },
        } = action;

        const suggestions: Location[] = yield call(searchLocationApi, location);
        put(fetchSuggestionsSuccessAction(suggestions));
    } catch (error) {
        put(fetchSuggestionsFailedAction(error));
    }
}

export default function* searchLocationWatcher() {
    yield takeLatest(FETCH_SUGGESTIONS_REQUEST, searchLocation);
}
