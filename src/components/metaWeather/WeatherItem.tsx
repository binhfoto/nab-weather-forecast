import React from "react";
import { Weather } from "../../interfaces/weather";
import { formatDate } from "../../utils/date";

export type WeatherItemProps = Omit<Weather, "id">;

export default function WeatherItem(props: WeatherItemProps) {
    const { applicableDate, minTemp, maxTemp } = props;
    return (
        <div className="weather-item">
            <h3>{formatDate(applicableDate)}</h3>
            <dd>
                Max: {`${Math.floor(maxTemp)}°C`}
                <br />
                Min: {`${Math.floor(minTemp)}°C`}
            </dd>
        </div>
    );
}
