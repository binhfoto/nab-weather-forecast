import React from "react";
import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import City from "./City";
import WeatherList from "./WeatherList";

export interface MetaWeatherProps {
    weathersOnLocation: WeathersOnLocation;
}

export default function MetaWeather(props: MetaWeatherProps): JSX.Element {
    const {
        weathersOnLocation: { locationTitle, weathers },
    } = props;

    return (
        <div className="meta-weather">
            <City title={locationTitle} />
            <WeatherList weatherList={weathers} />
        </div>
    );
}
