import React from "react";
import { shallow, mount } from "enzyme";

import appState from "../../fixtures/appState";
import { WeathersOnLocation } from "../../interfaces/weathersOnLocation";
import MetaWeather from "./MetaWeather";
import City from "./City";
import WeatherItem from "./WeatherItem";
import WeatherList from "./WeatherList";

describe("MetaWeather", () => {
    const weathersOnLocation: WeathersOnLocation = appState.weathersOnLocations[0];

    it("should render MetaWeather", () => {
        const wrapper = shallow(<MetaWeather weathersOnLocation={weathersOnLocation} />);
        expect(wrapper.find("div.meta-weather")).toHaveLength(1);
        expect(wrapper.find(City)).toHaveLength(1);
        expect(wrapper.find(WeatherList)).toHaveLength(1);
    });

    it("should render MetaWeather with 5 weather items", () => {
        const wrapper = mount(<MetaWeather weathersOnLocation={weathersOnLocation} />);
        expect(wrapper.find(WeatherItem)).toHaveLength(5);
    });
});
