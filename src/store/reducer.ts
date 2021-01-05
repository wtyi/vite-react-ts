import { combineReducers } from "redux";
import {
    RegisterReduxDataType,
    RegisterReduxActionType,
    reducer as registerReducer,
} from "./register/index";

export interface RootReduxDataType {
    register: RegisterReduxDataType;
}

export type RootReduxActionType = RegisterReduxActionType;

export const RootReducer = combineReducers<
    RootReduxDataType,
    RootReduxActionType
>({
    register: registerReducer,
});
