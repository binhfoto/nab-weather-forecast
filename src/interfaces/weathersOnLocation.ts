import { LocationResponse } from "./location";
import { Weather, WeatherResponse } from "./weather";

export interface WeathersOnLocationResponse extends LocationResponse {
    consolidated_weather: WeatherResponse[];
}

export interface WeathersOnLocation {
    locationId: number;
    weathers: Weather[];
}
