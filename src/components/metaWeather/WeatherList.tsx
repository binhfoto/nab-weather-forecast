import React from "react";
import { Weather } from "../../interfaces/weather";
import WeatherItem from "./WeatherItem";

export interface WeatherListProps {
    weatherList: Weather[];
}

export default function WeatherList(props: WeatherListProps): JSX.Element {
    const { weatherList } = props;
    return (
        <>
            {weatherList.map((weather: Weather) => {
                const { id, applicableDate, minTemp, maxTemp } = weather;
                return (
                    <WeatherItem
                        key={id}
                        applicableDate={applicableDate}
                        minTemp={minTemp}
                        maxTemp={maxTemp}
                    />
                );
            })}
        </>
    );
}
