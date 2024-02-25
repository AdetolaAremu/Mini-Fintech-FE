import { ThunkAction } from "redux-thunk";
import { ITransferToUser } from "../../../types/PrivateType";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import { RootState } from "../../../store/RootReducer";
import {
  GET_ALL_USERS,
  GET_ERRORS,
  GET_LOGGED_IN_USER,
  LOADING_STARTS,
} from "./types";
import {
  AllUsers,
  IResponseTransferToUser,
  LoggedInUser,
} from "../../../types/response/PrivateResponse";
import axios from "axios";
import axiosInstance from "../../../utils/AxiosInterceptor";

const service_url = import.meta.env.VITE_BASE_URL;

export const transferToAnotherUser = (
  userData: ITransferToUser
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: LOADING_STARTS });
      // const response = await axios.post(`${service_url}/login`, userData);
      axios.post<IResponseTransferToUser>(`${service_url}/transfer`, userData);
    } catch (error: ErrorResponse | any) {
      // dispatch({ type: AUTH_LOADING_ENDS });
      // if (error.response) {
      //   if (error.response.status === 422) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 400) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 500) {
      //   } else {
      //     dispatch({
      //       type: GET_AUTH_ERROR,
      //       payload: "Sorry, something went wrong!",
      //     });
      //   }
      // }
    }
  };
};

export const getCredit = (
  userData: ITransferToUser
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: LOADING_STARTS });
      // const response = await axios.post(`${service_url}/login`, userData);
    } catch (error: ErrorResponse | any) {
      // dispatch({ type: AUTH_LOADING_ENDS });
      // if (error.response) {
      //   if (error.response.status === 422) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 400) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 500) {
      //   } else {
      //     dispatch({
      //       type: GET_AUTH_ERROR,
      //       payload: "Sorry, something went wrong!",
      //     });
      //   }
      // }
    }
  };
};

export const getDebit = (
  userData: ITransferToUser
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: LOADING_STARTS });
      // const response = await axios.post(`${service_url}/login`, userData);
    } catch (error: ErrorResponse | any) {
      // dispatch({ type: AUTH_LOADING_ENDS });
      // if (error.response) {
      //   if (error.response.status === 422) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 400) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 500) {
      //   } else {
      //     dispatch({
      //       type: GET_AUTH_ERROR,
      //       payload: "Sorry, something went wrong!",
      //     });
      //   }
      // }
    }
  };
};

export const getTransactionHistory = (
  userData: ITransferToUser
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      userData;
      dispatch({ type: LOADING_STARTS });
      // const response = await axios.post(`${service_url}/login`, userData);
    } catch (error: ErrorResponse | any) {
      // dispatch({ type: AUTH_LOADING_ENDS });
      // if (error.response) {
      //   if (error.response.status === 422) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 400) {
      //     dispatch({ type: GET_AUTH_ERROR, payload: error.response });
      //   } else if (error.response.status === 500) {
      //   } else {
      //     dispatch({
      //       type: GET_AUTH_ERROR,
      //       payload: "Sorry, something went wrong!",
      //     });
      //   }
      // }
    }
  };
};

export const getLoggedInUser = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.get<LoggedInUser>(
        `/users/logged-in-user`
      );

      dispatch({ type: GET_LOGGED_IN_USER, payload: response.data.data });
    } catch (error: ErrorResponse | any) {
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};

export const getAllUsers = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.get<AllUsers>(`/users/all`);

      dispatch({ type: GET_ALL_USERS, payload: response.data.data });
    } catch (error: ErrorResponse | any) {
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_ERRORS, payload: error.response });
        } else {
          dispatch({
            type: GET_ERRORS,
            payload: "Sorry, something went wrong!",
          });
        }
      }
    }
  };
};
