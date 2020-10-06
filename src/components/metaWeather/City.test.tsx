import React from "react";
import { shallow } from "enzyme";

import City from "./City";

describe("City", () => {
    it("should render City", () => {
        const wrapper = shallow(<City title="Sai Gon" />);
        expect(wrapper.find("div.city")).toHaveLength(1);
        expect(wrapper.contains(<h2>Sai Gon</h2>)).toBe(true);
    });

    it("should render City with empty title", () => {
        const wrapper = shallow(<City title="" />);
        expect(wrapper.find("div.city")).toHaveLength(1);
        expect(wrapper.contains(<h2>{""}</h2>)).toBe(true);
    });
});
