import React, { useContext } from "react";
import RouterContext from "./router-context";
import { computedRouteIsRender } from "./util";

export const Switch: React.FC = (props) => {
    const value = useContext(RouterContext);
    // 遍历子元素
    if (Array.isArray(props.children)) {
        for (let i = 0; i < props.children.length; i++) {
            const child = props.children[i];
            const {
                path,
                exact,
            }: { path: string; exact: boolean } = (child as JSX.Element).props;
            const result = computedRouteIsRender(path, exact, value);
            if (result.isExact) {
                return <>{child}</>;
            }
        }
    }
    return <>{null}</>;
};
