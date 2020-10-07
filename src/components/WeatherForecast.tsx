import React from "react";

import Search from "./Search";
import Processing from "./Processing";
import MetaWeatherList from "./metaWeather/MetaWeatherList";

import "../styles/metaWeather.scss";

export default function WeatherForecast(): JSX.Element {
    return (
        <div className="container">
            <div className="row">
                <Search />
                <div className="end-of-row">
                    <Processing />
                </div>
            </div>
            <MetaWeatherList />
        </div>
    );
}
