import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/root";
import sagaMiddleware from "./sagas";
import { State } from "../interfaces/state";
import initialState from "./initialState";

const middleware =
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(sagaMiddleware))
        : applyMiddleware(sagaMiddleware);

export default function getStore(initState: State = initialState) {
    return createStore(rootReducer, initState, middleware);
}
