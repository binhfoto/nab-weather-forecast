import { IS_PROCESSING, ProcessingAction } from "../actions/processing";

export default function processingReducer(state: boolean = false, action: ProcessingAction): boolean {
    const {
        type,
        payload: { isProcessing },
    } = action;

    switch (type) {
        case IS_PROCESSING:
            return isProcessing;
        default:
            return state;
    }
}
