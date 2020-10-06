import React from "react";
import { Location } from "../../interfaces/location";

export type CityProps = Pick<Location, "title">;

export default function City(props: CityProps): JSX.Element {
    const { title } = props;
    return (
        <div className="city">
            <h2>{title}</h2>
        </div>
    );
}
