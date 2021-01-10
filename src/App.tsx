import React, { useState } from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect,
//     Switch,
// } from "react-router-dom";
import { Route, BrowserRouter as Router } from "./react-router/index";
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
                    <Route path="/" exact>
                        {/*<Redirect to={"/register"} />*/}
                    </Route>
                    <Route path="/login/add">
                        <LoginPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <Route path="/register/add">
                        <RegPage />
                    </Route>
                    <Route path="/register">
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
