import { LocationResponse } from "./location";
import { Weather, WeatherResponse } from "./weather";

export interface WeathersOnLocationResponse extends LocationResponse {
    title: string;
    consolidated_weather: WeatherResponse[];
}

export interface WeathersOnLocation {
    locationId: number;
    locationTitle: string;
    weathers: Weather[];
}
