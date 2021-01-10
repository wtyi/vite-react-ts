import React from "react";
import { Button, Divider } from "antd";
// import { useHistory, Route } from "react-router-dom";
import { Route, useHistory } from "../react-router";
import User from "./user";

export default function LoginPage() {
    const history = useHistory();
    return (
        <div>
            <Divider>
                <Route path={"/login/add"}>
                    <User />
                </Route>
                <Button
                    type="primary"
                    onClick={() => {
                        // history.push("/register", { type: "github" });
                        history?.push("/login", { a: 1 });
                        console.log(history);
                    }}
                >
                    注册
                </Button>
            </Divider>
        </div>
    );
}
