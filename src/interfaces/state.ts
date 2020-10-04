import { Location } from "./location";
import { WeathersOnLocation } from "./weathersOnLocation";
import { ErrorWrapper } from "./error";

export interface State {
    isProcessing: boolean;
    search: {
        location: string;
        suggestions: Location[];
    };
    weathersOnLocations: WeathersOnLocation[];
    error?: ErrorWrapper | null;
}
