import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { ThunkMiddleware, thunk } from 'redux-thunk';
import rootReducer from "./RootReducer";

const initialState = {};

const middleware: ThunkMiddleware[] = [thunk];

export default createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware as ThunkMiddleware[]),
    )
);