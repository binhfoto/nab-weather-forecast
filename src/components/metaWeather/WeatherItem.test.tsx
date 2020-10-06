import React from "react";
import { shallow } from "enzyme";

import WeatherItem from "./WeatherItem";

describe("Weather", () => {
    it("should render WeatherItem", () => {
        const wrapper = shallow(<WeatherItem applicableDate="2020-10-01" minTemp={30} maxTemp={33} />);

        expect(wrapper.find("div.weather-item")).toHaveLength(1);
        expect(wrapper.contains(<h3>Thu 01 Oct</h3>)).toBe(true);
        expect(
            wrapper.contains(
                <dd>
                    Max: 33°C
                    <br />
                    Min: 30°C
                </dd>,
            ),
        ).toBe(true);
    });
});
