import React from "react";
import { useSelector } from "react-redux";
import isProcessingSelector from "../redux/selectors/processing";

export default function Processing(): JSX.Element {
    const isProcessing: boolean = useSelector(isProcessingSelector);
    const status = isProcessing ? "Processing..." : "";
    return <span className="processing">{status}</span>;
}
