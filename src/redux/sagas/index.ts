import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import searchLocationWatcher from "./search";
import weathersOnLocationWatcher from "./weathersOnLocation";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([searchLocationWatcher(), weathersOnLocationWatcher()]);
}

sagaMiddleware.run(rootSaga);

export default sagaMiddleware;
