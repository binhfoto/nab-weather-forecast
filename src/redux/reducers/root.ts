import { combineReducers } from "redux";

import errorReducer from "./error";
import searchReducer from "./search";
import processingReducer from "./processing";
import weathersOnLocationsReducer from "./weathersOnLocation";

const rootReducer = combineReducers({
    isProcessing: processingReducer,
    search: searchReducer,
    weathersOnLocations: weathersOnLocationsReducer,
    error: errorReducer,
});

export default rootReducer;
