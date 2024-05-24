import {
  ALL_CATEGORY_FAIL,
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  CATEGORY_FAIL,
  CATEGORY_REQUEST,
  CATEGORY_RESET,
  CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAIL,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_RESET,
  DELETE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAIL,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_RESET,
  UPDATE_CATEGORY_SUCCESS,
} from "../constant/categoryConstant";

export const categoryReducer = (
  state = { category: {}, loading: false },
  action
) => {
  switch (action.type) {
    case CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
        isAuthenticated: true,
      };
    case CATEGORY_RESET:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        category: null,
      };
    default:
      return state;
  }
};

export const getCategoryReducer = (state = { getAllCategory: [] }, action) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      return {
        loading: true,
        getAllCategory: [],
      };
    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        getAllCategory: action.payload,
      };
    case ALL_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteCategoryReducer = (state = { DeletedCategory: {} }, action) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isDeleted: false
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      };
    case DELETE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_CATEGORY_RESET:
      return {
        ...state,
        isDeleted: false
      };
    default:
      return state;
  }
};

export const updateCategoryReducer = (state = { updateCategory: {}, loading: false }, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        updateCategory: action.payload,
        isAuthenticated: true
      };
    case UPDATE_CATEGORY_RESET:
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      };
    case UPDATE_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        updateCategory: null
      };
    default:
      return state;
  }
};
