import { combineReducers } from "@reduxjs/toolkit";
import auth from "../../reducers/authReducer/authSlice";
import bookings from "../../reducers/bookingsReducer/bookingsSlice";
import trips from "../../reducers/tripsReducer/tripsSlice";

export const rootReducer = combineReducers({
  auth,
  trips,
  bookings,
});
