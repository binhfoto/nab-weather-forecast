import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import appState from "../fixtures/appState";
import getStore from "../redux/store";

import WeatherForecast from "./WeatherForecast";
import Search from "./Search";
import MetaWeatherList from "./metaWeather/MetaWeatherList";
import Processing from "./Processing";

describe("WeatherForecast", () => {
    const store = getStore(appState);
    it("should render WeatherForecast", () => {
        const component = (
            <Provider store={store}>
                <WeatherForecast />
            </Provider>
        );

        const wrapper = mount(component);
        expect(wrapper.find(Search)).toHaveLength(1);
        expect(wrapper.find(Processing)).toHaveLength(1);
        expect(wrapper.find(MetaWeatherList)).toHaveLength(1);
    });
});
