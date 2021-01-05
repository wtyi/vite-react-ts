import { Action } from "redux";
import { RegisterReduxActionType } from "./constant";

// 定义数据类型
export interface RegisterReduxDataType {
    isReging: boolean; // 是否正在注册中
    isSuccess: boolean; // 是否注册成功
    isError: boolean; // 是否出错
    result: string; // 返回信息
}

// 初始化数据
const registerReduxInitData: RegisterReduxDataType = {
    isReging: false,
    isSuccess: false,
    isError: false,
    result: "",
};

// 实现reducer
export const reducer = (
    state: RegisterReduxDataType = registerReduxInitData,
    action: RegisterReduxActionType
): RegisterReduxDataType => {
    switch (action.type) {
        case "reg/SET_REG": {
            return {
                ...registerReduxInitData,
                isReging: action.payload,
            };
        }

        case "reg/SET_SUCCESS": {
            return {
                ...registerReduxInitData,
                isSuccess: action.payload,
            };
        }

        case "reg/SET_ERROR": {
            return {
                ...registerReduxInitData,
                isError: action.payload,
            };
        }

        case "reg/SET_RESULT": {
            return {
                ...state,
                result: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
