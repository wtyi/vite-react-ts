import { Divider, Button, Col, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

export default function RegPage() {
    const history = useHistory<null>();
    return (
        <div style={{ minHeight: "100vh" }}>
            <Row>
                <Col span={8} xs={2}></Col>
                <Col span={8} xs={20}>
                    col-8
                </Col>
                <Col span={8} xs={2}></Col>
            </Row>
        </div>
    );
}
