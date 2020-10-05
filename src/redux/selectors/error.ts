import { State } from "../../interfaces/state";
import { ErrorWrapper } from "../../interfaces/error";

export default function errorSelector(state: State): ErrorWrapper | null {
    const { error = null } = state;
    return error;
}
