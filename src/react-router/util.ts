import { match, pathToRegexp } from "path-to-regexp";
import {
    RouterContextDefaultVal,
    RouterContextValueProps,
} from "./router-context";
import { MatchResult } from "./types";

export const computedRouteIsRender = (
    path: string,
    exact: boolean | undefined,
    value: RouterContextValueProps
): MatchResult => {
    // When true the regexp will match to the end of the string. (default: true)
    // end 为true时匹配字符串末尾
    const regExp = pathToRegexp(path, [], { end: !!exact });
    const exec = match(regExp, {
        decode: decodeURIComponent,
    });
    const result = exec(value.location?.pathname || "");
    if (!result) {
        return {
            ...RouterContextDefaultVal.match,
            isExact: false,
        };
    }
    return {
        isExact: true,
        path: path,
        url: value.location?.pathname || "",
        params: result.params,
    };
};
