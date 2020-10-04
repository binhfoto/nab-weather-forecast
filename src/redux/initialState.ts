import { State } from "../interfaces/state";

const initialState: State = {
    isProcessing: false,
    search: {
        location: "",
        suggestions: [],
    },
    weathersOnLocations: [],
};

export default initialState;
