import React from "react";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import appState from "../fixtures/appState";
import getStore from "../redux/store";

import Processing from "./Processing";

describe("Processing", () => {
    it.each([
        ["empty", false, ""],
        ["Processing", true, "Processing..."],
    ])("should render %s status", (_text: string, isProcessing: boolean, status: string) => {
        const store = getStore({
            ...appState,
            isProcessing,
        });

        const component = (
            <Provider store={store}>
                <Processing />
            </Provider>
        );

        const wrapper = mount(component);
        const element = wrapper.find("span.processing");

        expect(element).toHaveLength(1);
        expect(element.text()).toBe(status);
    });
});
