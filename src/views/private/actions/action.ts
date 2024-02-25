import { ThunkAction } from "redux-thunk";
import { ITransferToUser } from "../../../types/PrivateType";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import { RootState } from "../../../store/RootReducer";
import {
  GET_ALL_CREDITS,
  GET_ALL_DEBITS,
  GET_ALL_USERS,
  GET_BALANCE,
  GET_ERRORS,
  GET_LOGGED_IN_USER,
  GET_MODAL_DATA,
  GET_MODAL_ERRORS,
  LOADING_STARTS,
  MODAL_LOADING_STARTS,
} from "./types";
import {
  AllUsers,
  CreditResponse,
  DebitResponse,
  GetBalanceResponse,
  LoggedInUser,
  TransferResponse,
} from "../../../types/response/PrivateResponse";
import axiosInstance from "../../../utils/AxiosInterceptor";

export const transferToAnotherUser = (
  data: ITransferToUser
): ThunkAction<Promise<void>, RootState, unknown, any> => {
  return async (dispatch) => {
    try {
      data;
      dispatch({ type: MODAL_LOADING_STARTS, payload: true });
      const response = await axiosInstance.post<TransferResponse>(
        `/debits`,
        data
      );

      dispatch({ type: GET_MODAL_DATA, payload: response.data });

      dispatch({ type: MODAL_LOADING_STARTS, payload: false });
    } catch (error: ErrorResponse | any) {
      if (error.response) {
        if (error.response.status !== 500) {
          dispatch({ type: GET_MODAL_ERRORS, payload: error });
        } else {
          dispatch({
            type: GET_MODAL_ERRORS,
            payload:
              "Sorry, something went wrong, please ensure you enter correct input!",
          });
        }
      }
      dispatch({ type: MODAL_LOADING_STARTS, payload: false });
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
          dispatch({ type: GET_ERRORS, payload: error });
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

export const getBalance = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });
      const response = await axiosInstance.get<GetBalanceResponse>(
        `/credits/balance`
      );

      dispatch({ type: GET_BALANCE, payload: response.data.data });

      dispatch({ type: LOADING_STARTS, payload: false });
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

export const getAllCredits = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });

      const response = await axiosInstance.get<CreditResponse>(`/credits`);
      dispatch({ type: GET_ALL_CREDITS, payload: response.data });

      dispatch({ type: LOADING_STARTS, payload: false });
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

export const getAllDebits = (): ThunkAction<
  Promise<void>,
  RootState,
  unknown,
  any
> => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_STARTS });

      const response = await axiosInstance.get<DebitResponse>(`/debits`);
      console.log(response.data.data, "res");
      dispatch({ type: GET_ALL_DEBITS, payload: response.data });

      dispatch({ type: LOADING_STARTS, payload: false });
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
