import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "../constant/categoryConstant";
import siteConfig from "../siteConfig";
import axios from "axios";

export const createCategory = (categoryData) => async (dispatch) => {
  try {
    dispatch({ type: CATEGORY_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };
    const { Data } = await axios.post(
      `${siteConfig.base_URL}/api/v1/admin/category/new`,
      categoryData,
      config
    );
    dispatch({ type: CATEGORY_SUCCESS, payload: Data });
  } catch (error) {
    dispatch({ type: CATEGORY_FAIL, payload: error.message });
  }
};
export const getCategory = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CATEGORY_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `${siteConfig.base_URL}/api/v1/getCategory`,
      config
    );
    dispatch({ type: ALL_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_CATEGORY_FAIL, payload: error.message });
  }
};

export const deleteCategory = (_id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_CATEGORY_REQUEST
    });
    const config = {
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("token"),
      }
    };
    const {data} = await axios.delete(
      `${siteConfig.base_URL}/api/v1/Category/${_id}`,
      config
    );
    dispatch({type:DELETE_CATEGORY_SUCCESS,payload:data})
  } catch (error) {
   dispatch({
    type:DELETE_CATEGORY_FAIL ,payload:error.message
   })
  }
}

export const updateCategory = (category) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_CATEGORY_REQUEST
    });
    const config = {
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("token"),
      }
    };
    const { data } = await axios.put(
      `${siteConfig.base_URL}/api/v1/Category/${category._id}`, 
      category,
      config
    );
    dispatch({ type: UPDATE_CATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_CATEGORY_FAIL, payload: error.message });
  }
};
