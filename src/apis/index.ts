import axios from "axios";
import { Location, LocationResponse } from "../interfaces/location";
import { Weather } from "../interfaces/weather";
import { WeathersOnLocation, WeathersOnLocationResponse } from "../interfaces/weathersOnLocation";

axios.defaults.baseURL = "https://www.metaweather.com";

export async function searchLocation(location: string): Promise<Location[]> {
    const { data } = await axios.get<LocationResponse[]>("/api/location/search/", {
        params: {
            query: location,
        },
    });

    return data.map<Location>(
        (location: LocationResponse): Location => {
            const { title, location_type: locationType, woeid: id } = location;
            return {
                id,
                title,
                locationType,
            };
        },
    );
}

export async function getWeatherOnLocation(location: number): Promise<WeathersOnLocation> {
    const { data } = await axios.get<WeathersOnLocationResponse>(`/api/location/${location}`);
    const { woeid: locationId, consolidated_weather: consolidatedWeather } = data;

    const weathers: Weather[] = consolidatedWeather.map(
        (weather): Weather => {
            const { id, applicable_date: applicableDate, min_temp: minTemp, max_temp: maxTemp } = weather;
            return {
                id,
                applicableDate,
                minTemp,
                maxTemp,
            };
        },
    );

    return {
        locationId,
        weathers,
    };
}
