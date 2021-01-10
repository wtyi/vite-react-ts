import React, { useContext } from "react";
import RouterContext from "./router-context";
import { History } from "history";
import { computedRouteIsRender } from "./util";
import { MatchResult } from "./types";

/**
 * 优先级 children > component > render
 */
export type RouteProps = {
    path: string;
    exact?: boolean;
    render?: (history: History | null) => React.ReactNode;
    component?: React.ReactNode;
    computedMath?: MatchResult;
};

export const Route: React.FC<RouteProps> = (props) => {
    const { path, exact, render, children, component, computedMath } = props;
    const ctx = useContext(RouterContext);

    // 判断是否需要渲染
    // 如果computedMath 存在则不用计算了 使用了switch
    // 匹配失败
    const result = computedRouteIsRender(path, exact, ctx);
    console.log(computedMath);
    if (!result.isExact) {
        return <>{null}</>;
    }
    // 匹配成功
    const MatchCom: React.ReactNode | null = children
        ? children
        : component
        ? component
        : render
        ? render(ctx.history)
        : null;

    // 子组件可能需要获取匹配结果。匹配参数 等等

    return (
        <RouterContext.Provider
            value={{
                ...ctx,
                match: result,
            }}
        >
            {MatchCom}
        </RouterContext.Provider>
    );
};
