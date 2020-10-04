// TODO: handle type better here
import { Action } from "redux";

export interface ErrorWrapper extends Error {
    [key: string]: any;
}

export interface ErrorPayload {
    error: ErrorWrapper;
}

export interface ErrorAction extends Action<string> {
    payload: ErrorPayload;
}
