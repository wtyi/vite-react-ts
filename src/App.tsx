import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import "antd/dist/antd.css";
import "./app.css";
import LoginPage from "./pages/login";
import RegPage from "./pages/register";
import DefaultLayout from "./pages/layout";

export default function App() {
    return (
        <Provider store={store}>
            <div className="app">
                <Router>
                    <Route path="/login" exact>
                        <LoginPage />
                    </Route>
                    <Route path="/register" exact>
                        <RegPage />
                    </Route>
                    <Route path="/add" exact>
                        <DefaultLayout />
                    </Route>
                </Router>
            </div>
        </Provider>
    );
}
