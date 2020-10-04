import { Location } from "./location";
import { WeathersOnLocation } from "./weathersOnLocation";

export interface State {
    isProcessing: boolean;
    search: {
        location: string;
        suggestions: Location[];
    };
    weathersOnLocations: WeathersOnLocation[];
}
