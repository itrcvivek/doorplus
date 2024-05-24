import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer from "./reducer/UserAuthReducer";
import { categoryReducer, deleteCategoryReducer, getCategoryReducer, updateCategoryReducer } from "./reducer/categoryReducer";
import { SubcategoryReducer, deleteSubCategoryReducer, fetchSubCategoryReducer, updateSubCategoryReducer } from "./reducer/subCategoryReducer";

const Reducer = combineReducers({
  // ===========================User==========================//
  user: AuthReducer,
  // ===========================Category==========================//
  category: categoryReducer,
  getAllCategory: getCategoryReducer,
  DeletedCategory: deleteCategoryReducer,
  updateCategory:updateCategoryReducer,
  // ===========================SubCategory==========================//
  subCategory: SubcategoryReducer,
  fetchAllSubCategory: fetchSubCategoryReducer,
  DeletedSubCategory:deleteSubCategoryReducer,
  updateSubCategory:updateSubCategoryReducer,

});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  Reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
