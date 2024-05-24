import axios from "axios";
import { DELETE_SUBCATEGORY_FAIL, DELETE_SUBCATEGORY_REQUEST, DELETE_SUBCATEGORY_SUCCESS, GET_SUBCATEGORY_FAIL, GET_SUBCATEGORY_REQUEST, GET_SUBCATEGORY_SUCCESS, SUBCATEGORY_FAIL, SUBCATEGORY_REQUEST, SUBCATEGORY_SUCCESS, UPDATE_SUBCATEGORY_FAIL, UPDATE_SUBCATEGORY_REQUEST, UPDATE_SUBCATEGORY_SUCCESS } from "../constant/subCategoryConstant";
import siteConfig from "../siteConfig";




export const subCategory = (subCategoryData) => async (dispatch) => {
  try {
    dispatch({ type: SUBCATEGORY_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
    };
    const { Data } = await axios.post(
      `${siteConfig.base_URL}/api/v1/admin/Subcategory/`,
      subCategoryData,
      config
    );
    dispatch({ type: SUBCATEGORY_SUCCESS, payload: Data });
  } catch (error) {
    dispatch({ type: SUBCATEGORY_FAIL, payload: error.message });
  }
};


export const fetchSubCetegory = (categoryId) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SUBCATEGORY_REQUEST
    })
    const config = {
      Headers: {
        "content-type": "application/json",
        token: localStorage.getItem("token")
      }
    }
    const { data } = await axios.get(
      `${siteConfig.base_URL}/api/v1/subCategory/${categoryId}`,
      config
    );

    dispatch({ type: GET_SUBCATEGORY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_SUBCATEGORY_FAIL, payload: error.message })
  }
}


export const deleteSubCategory = (_id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_SUBCATEGORY_REQUEST
    });
    const config = {
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("token"),
      }
    };
    const { data } = await axios.delete(
      `${siteConfig.base_URL}/api/v1/subCategory/${_id}`,
      config
    );
    dispatch({type:DELETE_SUBCATEGORY_SUCCESS,payload:data})
  } catch (error) {
   dispatch({
    type:DELETE_SUBCATEGORY_FAIL ,payload:error.message
   })
  }
}

export const updateSubCategory = (subCategory) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_SUBCATEGORY_REQUEST
    });
    const config = {
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("token"),
      }
    };
    const { data } = await axios.put(
      `${siteConfig.base_URL}/api/v1/updateSubCategory/${subCategory._id}`, 
      subCategory,
      config
    );
    dispatch({ type: UPDATE_SUBCATEGORY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_SUBCATEGORY_FAIL, payload: error.message });
  }
};