import { combineReducers } from "redux";
import processingReducer from "./processing";
import searchReducer from "./search";
import weathersOnLocationsReducer from "./weathersOnLocation";

const rootReducer = combineReducers({
    isProcessing: processingReducer,
    search: searchReducer,
    weathersOnLocations: weathersOnLocationsReducer,
});

export default rootReducer;
