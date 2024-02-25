import {
  IAllUsers,
  IGetBalance,
  ILoggedInUserInfo,
} from "../../../types/PrivateType";
import { ErrorResponse } from "../../../types/response/ErrorResponse";
import {
  CreditResponse,
  DebitResponse,
  TransferResponse,
} from "../../../types/response/PrivateResponse";
import {
  GET_ALL_CREDITS,
  GET_ALL_DEBITS,
  GET_ALL_USERS,
  GET_BALANCE,
  GET_DATA,
  GET_ERRORS,
  GET_LOGGED_IN_USER,
  GET_MODAL_DATA,
  GET_MODAL_ERRORS,
  LOADING_ENDS,
  LOADING_STARTS,
  MODAL_LOADING_STARTS,
} from "./types";

export interface PrivateState {
  modalError: ErrorResponse;
  loading: boolean;
  getData: object | string[];
  errors?: ErrorResponse;
  loggedInUser: ILoggedInUserInfo;
  allUsers: IAllUsers;
  getModalData: TransferResponse;
  modalLoading: boolean;
  getBalanceData: IGetBalance;
  getAllCredit: CreditResponse;
  getAllDebit: DebitResponse;
}

const init: PrivateState = {
  getData: {},
  loading: false,
  errors: null,
  modalError: null,
  loggedInUser: null,
  allUsers: null,
  getModalData: null,
  modalLoading: false,
  getBalanceData: null,
  getAllCredit: null,
  getAllDebit: null,
};

const privateReducer = (state = init, action: any) => {
  switch (action.type) {
    case LOADING_STARTS:
      return {
        ...state,
        loading: true,
      };
    case LOADING_ENDS:
      return {
        ...state,
        loading: false,
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        getData: action.payload,
      };
    case GET_LOGGED_IN_USER:
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };
    case GET_MODAL_DATA:
      return {
        ...state,
        getModalData: action.payload,
      };
    case MODAL_LOADING_STARTS:
      return {
        ...state,
        modalLoading: action.payload,
      };
    case GET_MODAL_ERRORS:
      return {
        ...state,
        modalError: action.payload,
      };
    case GET_BALANCE:
      return {
        ...state,
        getBalanceData: action.payload,
      };
    case GET_ALL_CREDITS:
      return {
        ...state,
        getAllCredit: action.payload,
      };
    case GET_ALL_DEBITS:
      return {
        ...state,
        getAllDebit: action.payload,
      };
    default:
      return state;
  }
};

export default privateReducer;
