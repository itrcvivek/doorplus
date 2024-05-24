import axios from "axios";
import {
  LOAD_USER_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constant/UserAuthConstant";
import siteConfig from "../siteConfig";

export const loginUser = (Data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },

    };
    const { data } = await axios.post(
      `${siteConfig.base_URL}/api/v1/loginuser`,
      Data,
      config
    );
    localStorage.setItem('token', data.token);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { signupData } = await axios.post(
      `${siteConfig.base_URL}/api/v1/register`,
      registerData,
      config
    );
    dispatch({ type: REGISTER_SUCCESS, payload: signupData });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { Data } = await axios.get(
      `${siteConfig.base_URL}/api/v1/me`, config
    );
    dispatch({ type: LOAD_USER_SUCCESS, payload: Data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAILURE, payload: error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.get(`${siteConfig.base_URL}/api/v1/logoutuser`, config);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.message });
  }
};