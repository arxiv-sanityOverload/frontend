import { combineReducers } from "redux";

import { reducer } from "./reducer";
import { subCategoryReducer } from "./subCategoryReducer";
import { githubReducer } from "./githubReducer";

const appReducer = combineReducers({
  reducer, subCategoryReducer, githubReducer
});

export default appReducer;
