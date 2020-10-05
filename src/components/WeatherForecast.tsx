import React from "react";
import Search from "./Search";
import MetaWeatherList from "./metaWeather/MetaWeatherList";

import "../styles/metaWeather.scss";

export default function WeatherForecast(): JSX.Element {
    return (
        <div className="container">
            <Search />
            <MetaWeatherList />
        </div>
    );
}
