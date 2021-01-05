import React from "react";
import { Button, Divider } from "antd";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
    const history = useHistory<{ type: string }>();
    return (
        <div>
            <Divider>
                <Button
                    type="primary"
                    onClick={() => {
                        history.push("/register", { type: "github" });
                    }}
                >
                    注册
                </Button>
            </Divider>
        </div>
    );
}
