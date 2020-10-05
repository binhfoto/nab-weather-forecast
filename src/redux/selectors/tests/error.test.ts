import errorSelector from "../error";
import initialState from "../../initialState";

describe("error", () => {
    it("should return undefined error", () => {
        const result = errorSelector(initialState);
        expect(result).toBe(null);
    });

    it("should return error", () => {
        const result = errorSelector({
            ...initialState,
            error: {
                name: "test",
                message: "test message",
            },
        });

        expect(result).toEqual({
            name: "test",
            message: "test message",
        });
    });
});
