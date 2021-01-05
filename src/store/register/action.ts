// actions

import { RegisterReduxActionType } from "./constant";

export const ChangeIsReg = (isReg: boolean): RegisterReduxActionType => ({
    type: "reg/SET_REG",
    payload: isReg,
});

export const ChangeIsError = (isError: boolean): RegisterReduxActionType => ({
    type: "reg/SET_ERROR",
    payload: isError,
});

export const ChangeIsSuccess = (
    isSuccess: boolean
): RegisterReduxActionType => ({ type: "reg/SET_SUCCESS", payload: isSuccess });

export const ChangeIsResult = (result: string): RegisterReduxActionType => ({
    type: "reg/SET_RESULT",
    payload: result,
});
