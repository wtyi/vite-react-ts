import React, { useContext } from "react";
import { match, pathToRegexp } from "path-to-regexp";
import RouterContext from "./router-context";
import { History } from "history";

/**
 * 优先级 children > component > render
 */
type RouteProps = {
    path: string;
    exact?: boolean;
    render?: (history: History | null) => React.ReactNode;
    component?: React.ReactNode;
};

export const Route = (props: React.PropsWithChildren<RouteProps>) => {
    const { path, exact, render, children, component } = props;
    const value = useContext(RouterContext);

    // 判断是否需要渲染
    const regExp = pathToRegexp(path);
    const exec = match(regExp, { decode: decodeURIComponent });
    const result = exec(value.location?.pathname || "");
    // 匹配失败
    if (!result) {
        return <div>null</div>;
    }
    // 判断是否精确匹配到
    if (exact && result.path !== path) {
        return <div>null</div>;
    }

    // 匹配成功
    const MatchCom: React.ReactNode | null = children
        ? children
        : component
        ? component
        : render
        ? render(value.history)
        : null;
    return { MatchCom };
};
