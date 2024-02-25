// app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authReducer, { AuthState } from "../views/auth/actions/reducer";
import privateReducer, { PrivateState } from "../views/private/actions/reducer";

export interface RootState {
  auth: AuthState;
  private: PrivateState;
}

export const rootReducer = combineReducers({
  auth: authReducer,
  private: privateReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
