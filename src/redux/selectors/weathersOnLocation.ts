import { State } from "../../interfaces/state";
import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";

export default function weathersOnLocationSelector(state: State): WeathersOnLocation[] {
    const { weathersOnLocations } = state;
    return weathersOnLocations;
}
