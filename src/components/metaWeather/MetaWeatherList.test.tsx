import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";

import appState from "../../fixtures/appState";
import getStore from "../../redux/store";
import MetaWeatherList from "./MetaWeatherList";
import MetaWeather from "./MetaWeather";

describe("MetaWeatherList", () => {
    const store = getStore(appState);

    it("should render MetaWeatherList", () => {
        const wrapper = mount(
            <Provider store={store}>
                <MetaWeatherList />
            </Provider>,
        );

        expect(wrapper.find("div.meta-weather-list")).toHaveLength(1);
        expect(wrapper.find(MetaWeather)).toHaveLength(1);
    });
});
