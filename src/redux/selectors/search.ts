import { createStructuredSelector } from "reselect";
import { State } from "../../interfaces/state";
import { Location } from "../../interfaces/location";

function locationSelector(state: State): string {
    const {
        search: { location },
    } = state;
    return location;
}

function suggestionsSelector(state: State): Location[] {
    const {
        search: { suggestions },
    } = state;
    return suggestions;
}

const searchSelector = createStructuredSelector<State, { location: string; suggestions: Location[] }>({
    location: locationSelector,
    suggestions: suggestionsSelector,
});

export default searchSelector;
