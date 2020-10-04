import { Action } from "../../interfaces/action";

export const IS_PROCESSING = "IS_PROCESSING";

export interface ProcessingPayload {
    isProcessing: boolean;
}

export interface ProcessingAction extends Action<ProcessingPayload> {}

export function isProcessing(isProcessing: boolean): ProcessingAction {
    return {
        type: IS_PROCESSING,
        payload: { isProcessing },
    };
}
