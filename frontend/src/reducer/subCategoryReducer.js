import { DELETE_SUBCATEGORY_FAIL, DELETE_SUBCATEGORY_REQUEST, DELETE_SUBCATEGORY_RESET, DELETE_SUBCATEGORY_SUCCESS, GET_SUBCATEGORY_FAIL, GET_SUBCATEGORY_REQUEST, GET_SUBCATEGORY_SUCCESS, SUBCATEGORY_FAIL, SUBCATEGORY_REQUEST, SUBCATEGORY_RESET, SUBCATEGORY_SUCCESS, UPDATE_SUBCATEGORY_FAIL, UPDATE_SUBCATEGORY_REQUEST, UPDATE_SUBCATEGORY_RESET, UPDATE_SUBCATEGORY_SUCCESS } from "../constant/subCategoryConstant";

export const SubcategoryReducer = (state = { subCategory: {}, loading: false }, action) => {
  switch (action.type) {
    case SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case SUBCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        subCategory: action.payload,
        isAuthenticated: true,
      };
    case SUBCATEGORY_RESET:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case SUBCATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        subCategory: null,
      };
    default:
      return state;
  }
};

export const fetchSubCategoryReducer = (state = { fetchAllSubCategory: [] }, action) => {
  switch (action.type) {
    case GET_SUBCATEGORY_REQUEST:
      return {
        loading: true,
        fetchAllSubCategory: [],
      };
    case GET_SUBCATEGORY_SUCCESS:
      return {
        loading: false,
        fetchAllSubCategory: action.payload,
      };
    case GET_SUBCATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteSubCategoryReducer = (state = { DeletedSubCategory: {} }, action) => {
  switch (action.type) {
    case DELETE_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isDeleted: false
      };
    case DELETE_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true
      };
    case DELETE_SUBCATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case DELETE_SUBCATEGORY_RESET:
      return {
        ...state,
        isDeleted: false
      };
    default:
      return state;
  }
};

export const updateSubCategoryReducer = (state = { updateSubCategory: {}, loading: false }, action) => {
  switch (action.type) {
    case UPDATE_SUBCATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false
      };
    case UPDATE_SUBCATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        updateSubCategory: action.payload,
        isAuthenticated: true
      };
    case UPDATE_SUBCATEGORY_RESET:
      return {
        ...state,
        loading: false,
        isAuthenticated: true
      };
    case UPDATE_SUBCATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        updateSubCategory: null
      };
    default:
      return state;
  }
};