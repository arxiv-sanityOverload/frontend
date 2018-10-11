import { combineReducers } from "redux";
import { subCategoryReducer } from "./subCategoryReducer";
import { githubReducer } from "./githubReducer";

const appReducer = combineReducers({
  subCategoryReducer, githubReducer
});

export default appReducer;
