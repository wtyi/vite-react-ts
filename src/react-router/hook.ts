import React, { useContext } from "react";
import RouterContext from "./router-context";

export const useHistory = () => {
    const ctx = useContext(RouterContext);
    return ctx.history;
};

export const useParams = (): Record<string, string> => {
    const ctx = useContext(RouterContext);
    return ctx.match.params;
};

export const useState = () => {
    const ctx = useContext(RouterContext);
    return ctx.location?.state;
};
