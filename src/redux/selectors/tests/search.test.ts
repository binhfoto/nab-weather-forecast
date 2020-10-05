import searchSelector from "../search";

import { State } from "../../../interfaces/state";
import initialState from "../../initialState";

describe("searachSelector", () => {
    const state: State = {
        ...initialState,
        search: {
            location: "Ho Chi Minh",
            suggestions: [
                {
                    id: 1,
                    title: "Ho Chi Minh",
                    locationType: "city",
                },
                {
                    id: 2,
                    title: "Da Nang",
                    locationType: "city",
                },
            ],
        },
    };

    it("should return search info", () => {
        const result = searchSelector(state);
        expect(result).toEqual({
            location: "Ho Chi Minh",
            suggestions: [
                {
                    id: 1,
                    title: "Ho Chi Minh",
                    locationType: "city",
                },
                {
                    id: 2,
                    title: "Da Nang",
                    locationType: "city",
                },
            ],
        });
    });
});
