import React from "react";
import { shallow } from "enzyme";

import { Weather } from "../../interfaces/weather";
import appState from "../../fixtures/appState";
import WeatherList from "./WeatherList";
import WeatherItem from "./WeatherItem";

describe("WeatherList", () => {
    const weatherList: Weather[] = appState.weathersOnLocations[0].weathers;

    it("should render WeatherList", () => {
        const wrapper = shallow(<WeatherList weatherList={weatherList} />);
        expect(wrapper.find(WeatherItem)).toHaveLength(5);
    });
});
