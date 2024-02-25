import { IAllUsers, ILoggedInUserInfo } from "../../../types/PrivateType";
import {
  GET_ALL_USERS,
  GET_DATA,
  GET_ERRORS,
  GET_LOGGED_IN_USER,
  LOADING_ENDS,
  LOADING_STARTS,
} from "./types";

export interface PrivateState {
  modalError: object;
  loading: boolean;
  getData: object | string[];
  errors?: object | string;
  loggedInUser: ILoggedInUserInfo;
  allUsers: IAllUsers;
}

const init: PrivateState = {
  getData: {},
  loading: false,
  errors: null,
  modalError: {},
  loggedInUser: null,
  allUsers: null,
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
    default:
      return state;
  }
};

export default privateReducer;
