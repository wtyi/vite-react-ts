import { Router } from "./router";
import React, { useState } from "react";
import { createBrowserHistory, History } from "history";

export const BrowserRouter: React.FC = (props) => {
    const [history, setHistory] = useState<History>(() => {
        return createBrowserHistory({
            window,
        });
    });
    console.log(props);
    return <Router history={history}>{props.children}</Router>;
};
