import { State } from "../../interfaces/state";

export default function isProcessingSelector(state: State): boolean {
    const { isProcessing } = state;
    return isProcessing;
}
