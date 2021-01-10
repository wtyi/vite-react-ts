import {
    Divider,
    Button,
    Col,
    Row,
    Form,
    Input,
    Checkbox,
    Space,
    Badge,
    message,
    Tag,
} from "antd";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { RootReduxActionType, RootReduxDataType } from "../store/reducer";
import {
    ChangeIsError,
    ChangeIsReg,
    ChangeIsResult,
    ChangeIsSuccess,
} from "../store/register";

type loginRespType = {
    error_code: number;
    message: string;
    data?: {
        access_token: string;
        expire: number;
    };
};

export default function RegPage() {
    const history = useHistory<null>();
    const dispatch = useDispatch();
    const { result, isError, isReging, isSuccess } = useSelector(
        (state: RootReduxDataType) => state.register
    );

    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 },
    };
    const tailLayout = { wrapperCol: { span: 14, offset: 10 } };

    const onFinish = useCallback((values: any) => {
        console.log("完成填写", values);
        dispatch(ChangeIsReg(true));
        setTimeout(() => {
            const formData = new FormData();
            fetch("http://127.0.0.1:8952/api/auth", {
                method: "POST",
                body: JSON.stringify(values),
            })
                .then<loginRespType>((res) => res.json())
                .then((res) => {
                    const { error_code, message: msg, data } = res;
                    dispatch(ChangeIsResult(msg));
                    if (error_code != 200) {
                        message.info(msg);
                        dispatch(ChangeIsReg(false));
                        dispatch(ChangeIsError(true));
                        return;
                    }
                    dispatch(ChangeIsSuccess(true));
                    message.success("登录成功");
                })
                .catch((err) => {
                    dispatch(ChangeIsError(true));
                    dispatch(ChangeIsResult("网络错误"));
                });
        }, 2000);
    }, []);
    const onFinishFail = useCallback((errorInfo: any) => {
        console.log("请检查字段", errorInfo);
    }, []);

    const resetForm = useCallback(() => {
        form.resetFields();
    }, [form]);

    return (
        <div style={{ minHeight: "100vh" }}>
            <Row>
                <Col span={8} xs={2}>
                    <Badge status="success" text="成功" />
                    <Badge
                        status="error"
                        text={
                            <span style={{ fontSize: "12px", color: "#aaa" }}>
                                失败
                            </span>
                        }
                    />
                    <Badge status="default" />
                    <Badge status="processing" />
                    <Badge status="warning" />
                </Col>
                <Col span={8} xs={20}>
                    <Row>
                        <Col span={20} offset={2}>
                            <Form
                                name="form"
                                {...layout}
                                form={form}
                                initialValues={{
                                    user: {
                                        name: "sb",
                                        password: "qwe112233",
                                    },
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFail}
                                size="middle"
                            >
                                <Form.Item
                                    label="用户名"
                                    name="username"
                                    required
                                    tooltip="可输入用户名/手机号/邮箱"
                                    rules={[
                                        {
                                            required: true,
                                            message: "用户名不可为空",
                                        },
                                        {
                                            max: 12,
                                            min: 6,
                                            message:
                                                "用户名长度限制为6-12个字符",
                                        },
                                    ]}
                                >
                                    <Input placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item
                                    label="密码"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "密码不可为空",
                                        },
                                        {
                                            max: 20,
                                            min: 6,
                                            message: "密码长度限制为6-20个字符",
                                        },
                                    ]}
                                >
                                    <Input.Password placeholder="请输入用户名" />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Checkbox children={"记住登录"} />
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Tag
                                        style={{
                                            width: "100%",
                                            padding: "10px 20px",
                                        }}
                                        color={"warning"}
                                        visible={isError}
                                    >
                                        {result}{" "}
                                    </Tag>
                                </Form.Item>
                                <Form.Item {...tailLayout}>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        block
                                        loading={isReging}
                                        disabled={isSuccess}
                                    >
                                        {isSuccess ? "已登录" : "登录"}
                                    </Button>
                                    or <Link to="/login">去注册</Link>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </Col>
                <Col span={8} xs={2} />
            </Row>
        </div>
    );
}
