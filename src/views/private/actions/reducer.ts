import { GET_DATA, GET_ERRORS, LOADING_ENDS, LOADING_STARTS } from "./types";

export interface PrivateState {
  modalError: object;
  loading: boolean;
  getData: object | string[];
  errors?: object | string;
}

const init: PrivateState = {
  getData: {},
  loading: false,
  errors: null,
  modalError: {},
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
    default:
      return state;
  }
};

export default privateReducer;
