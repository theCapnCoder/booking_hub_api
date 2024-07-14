import { combineReducers } from "@reduxjs/toolkit";
import auth from "../../reducers/authReducer/authSlice";

export const rootReducer = combineReducers({
  auth,
});
