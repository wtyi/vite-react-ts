import { createStore, compose } from "redux";
import { RootReducer } from "./reducer";

type WindowReduxExtension = Window &
    typeof globalThis & {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
    };

const composeEnhancers =
    (window as WindowReduxExtension).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;

export default createStore(RootReducer, composeEnhancers());
