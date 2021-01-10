import React, { useContext } from "react";
import RouterContext from "./router-context";
import { To } from "history";

export type LinkProps = {
    to: To;
};
export const Link: React.FC<LinkProps> = (props) => {
    const ctx = useContext(RouterContext);
    return (
        <a
            href="#"
            onClick={() => {
                ctx.history?.push(props.to);
            }}
        >
            {props.children}
        </a>
    );
};
