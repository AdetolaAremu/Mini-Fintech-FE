import { ILogin } from "../../../types/LoginType";
import ROUTE from "../../../routes/routes.json";
import {
  AUTH_LOADING_ENDS,
  AUTH_LOADING_STARTS,
  SET_CURRENT_USER,
  GET_AUTH_ERROR,
  GET_SUCCESS_RESPONSE,
} from "./types";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import setAuthToken from "../../../utils/SetAuthToken";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import { RootState } from "../../../store/RootReducer";
import { ThunkAction } from "redux-thunk";
import { IRegister } from "../../../types/RegisterType";
import {
  ILoginResponse,
  IRegistrationResponse,
} from "../../../types/response/AuthResponse";

export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

const service_url = import.meta.env.VITE_BASE_URL;

export const loginUser = (
  userData: ILogin
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: AUTH_LOADING_STARTS });
      const response = await axios.post<ILoginResponse>(
        `${service_url}/auth/login`,
        userData
      );
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(localStorage.jwtToken);
      const decoded = jwtDecode(token);
      window.location.href = ROUTE.PRIVATEHOME;
      dispatch(setCurrentUser(decoded));
      dispatch({ type: AUTH_LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: AUTH_LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_AUTH_ERROR, payload: error.response });
        } else {
          dispatch({
            type: GET_AUTH_ERROR,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const registerUser = (
  userData: IRegister
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: AUTH_LOADING_STARTS });
      const response = await axios.post<IRegistrationResponse>(
        `${service_url}/auth/register`,
        userData
      );

      response.data.data &&
        dispatch({
          type: GET_SUCCESS_RESPONSE,
          payload: response.data.message,
        });
      dispatch({ type: AUTH_LOADING_ENDS });
    } catch (error: ErrorResponse | any) {
      dispatch({ type: AUTH_LOADING_ENDS });
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_AUTH_ERROR, payload: error.response });
        } else {
          dispatch({
            type: GET_AUTH_ERROR,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const logoutUser = () => () => {
  localStorage.clear();
  window.location.href = ROUTE.LOGIN;
};
