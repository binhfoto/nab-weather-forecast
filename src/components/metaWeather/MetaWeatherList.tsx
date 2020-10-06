import React from "react";
import { useSelector } from "react-redux";

import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import MetaWeather from "./MetaWeather";
import weathersOnLocationSelector from "../../redux/selectors/weathersOnLocation";

export default function MetaWeatherList(): JSX.Element {
    const metaWeatherList = useSelector(weathersOnLocationSelector);

    return (
        <div className="meta-weather-list">
            {metaWeatherList.map(
                (weathersOnLocation: WeathersOnLocation): JSX.Element => (
                    <MetaWeather
                        key={weathersOnLocation.locationId}
                        weathersOnLocation={weathersOnLocation}
                    />
                ),
            )}
        </div>
    );
}
