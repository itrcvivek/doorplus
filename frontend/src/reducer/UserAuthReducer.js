import {
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../constant/UserAuthConstant";

const AuthReducer = (state = { user: {} }, action) => {
  console.log(action,"ggg")
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
    case LOAD_USER_REQUEST:
    case LOGOUT_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };

    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case LOAD_USER_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        user: null
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};

export default AuthReducer;
