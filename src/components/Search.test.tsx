import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import appState from "../fixtures/appState";
import getStore from "../redux/store";

import Search from "./Search";
import Autosuggest from "react-autosuggest";

describe("Search", () => {
    const store = getStore(appState);

    it("should render Search", () => {
        const component = (
            <Provider store={store}>
                <Search />
            </Provider>
        );
        const wrapper = mount(component);

        expect(wrapper.find(Autosuggest)).toHaveLength(1);
        expect(wrapper.find("input[value='Sai Gon']")).toHaveLength(1);
        expect(
            wrapper.find("img[src='https://img.icons8.com/pastel-glyph/128/000000/search--v1.png']"),
        ).toHaveLength(1);
    });
});
