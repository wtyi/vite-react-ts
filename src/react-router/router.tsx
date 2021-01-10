import React, { useEffect, useMemo, useState } from "react";
import { History, Location } from "history";
import { match } from "path-to-regexp";
import RouterContext, {
    RouterContextDefaultVal,
    RouterContextValueProps,
} from "./router-context";

export type RouterProps = {
    history: History;
};

export const Router: React.FC<RouterProps> = (props) => {
    const { history, children } = props;
    const [location, setLocation] = useState<Location | null>(null);

    const value = useMemo<RouterContextValueProps>(() => {
        // 初次渲染
        if (location == null) {
            return RouterContextDefaultVal;
        }
        // 路由变化后 返回新的对象 触发子组件渲染
        return {
            history,
            match: RouterContextDefaultVal.match,
            location,
        };
    }, [location]);

    useEffect(() => {
        // 首次渲染
        setLocation(history.location);
        const unListen = history.listen(({ action, location: newLocation }) => {
            // 当路由变化时 重新设置自己的location 并更改RouterContext value(useMemo)
            // setLocation 运行后 重新执行 这时value useMemo依赖性被改变 重新计算新的 RouterContext value
            // 以来RouterContext的子组件 会重新执行渲染...
            setLocation(newLocation);
        });
        return () => unListen();
    }, [history]);

    return (
        <RouterContext.Provider value={value}>
            {children}
        </RouterContext.Provider>
    );
};
