import { combineReducers } from "redux";

import { reducer } from "./reducer";
import { subCategoryReducer } from "./subCategoryReducer";

const appReducer = combineReducers({
  reducer, subCategoryReducer
});

export default appReducer;
