import { combineReducers } from "@reduxjs/toolkit";
import auth from "../../reducers/authReducer/authSlice";
import trips from "../../reducers/tripsReducer/tripsSlice";

export const rootReducer = combineReducers({
  auth,
  trips,
});
