import { all } from "redux-saga/effects";
import searchLocationWatcher from "./search";
import weathersOnLocationWatcher from "./weathersOnLocation";

export default function* rootSaga() {
    yield all([searchLocationWatcher(), weathersOnLocationWatcher()]);
}
