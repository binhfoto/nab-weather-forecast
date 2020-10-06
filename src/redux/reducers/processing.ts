import { IS_PROCESSING, ProcessingAction } from "../actions/processing";

export default function processingReducer(state: boolean = false, action: ProcessingAction): boolean {
    switch (action.type) {
        case IS_PROCESSING:
            return action.payload.isProcessing;
        default:
            return state;
    }
}
