import React from "react";
import { History, Location } from "history";
import { MatchResult } from "./types";

export const RouterContextDefaultVal: RouterContextValueProps = {
    history: null,
    location: null,
    match: {
        isExact: true,
        params: {},
        path: "/",
        url: "/",
    },
};
const Context = React.createContext<RouterContextValueProps>(
    RouterContextDefaultVal
);
Context.displayName = "Router";

export type RouterContextValueProps = {
    history: History | null;
    location: Location | null;
    match: MatchResult;
};
export default Context;
