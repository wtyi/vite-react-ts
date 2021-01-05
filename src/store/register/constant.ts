// 定义action类型

interface ActionReging {
    type: "reg/SET_REG";
    payload: boolean;
}
interface ActionResult {
    type: "reg/SET_RESULT";
    payload: string;
}
interface ActionError {
    type: "reg/SET_ERROR";
    payload: boolean;
}
interface ActionSuccess {
    type: "reg/SET_SUCCESS";
    payload: boolean;
}

export type RegisterReduxActionType =
    | ActionReging
    | ActionResult
    | ActionError
    | ActionSuccess;
