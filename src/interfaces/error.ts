// TODO: handle type better here
export interface ErrorWrapper extends Error {
    [key: string]: any;
}

export interface ErrorPayload {
    error: ErrorWrapper;
}
