import weathersOnLocationSelector from "../weathersOnLocation";

import { State } from "../../../interfaces/state";
import initialState from "../../initialState";

describe("weathersOnLocationSelector", () => {
    const state: State = {
        ...initialState,
        weathersOnLocations: [
            {
                locationId: 1,
                weathers: [
                    {
                        id: 111,
                        applicableDate: "applicableDate",
                        minTemp: 10,
                        maxTemp: 14,
                    },
                    {
                        id: 112,
                        applicableDate: "applicableDate",
                        minTemp: 5,
                        maxTemp: 7,
                    },
                ],
            },
            {
                locationId: 2,
                weathers: [
                    {
                        id: 222,
                        applicableDate: "applicableDate",
                        minTemp: 10,
                        maxTemp: 14,
                    },
                    {
                        id: 223,
                        applicableDate: "applicableDate",
                        minTemp: 5,
                        maxTemp: 7,
                    },
                ],
            },
        ],
    };

    it("should return weathers on location", () => {
        const result = weathersOnLocationSelector(state);
        expect(result).toEqual([
            {
                locationId: 1,
                weathers: [
                    {
                        id: 111,
                        applicableDate: "applicableDate",
                        minTemp: 10,
                        maxTemp: 14,
                    },
                    {
                        id: 112,
                        applicableDate: "applicableDate",
                        minTemp: 5,
                        maxTemp: 7,
                    },
                ],
            },
            {
                locationId: 2,
                weathers: [
                    {
                        id: 222,
                        applicableDate: "applicableDate",
                        minTemp: 10,
                        maxTemp: 14,
                    },
                    {
                        id: 223,
                        applicableDate: "applicableDate",
                        minTemp: 5,
                        maxTemp: 7,
                    },
                ],
            },
        ]);
    });
});
