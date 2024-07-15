import {
  createSlice,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { REDUCER_KEY_BOOKINGS } from "../../../constants";
import { createBooking, deleteBooking, getBookings } from "./actionCreators";
import { BookingsState } from "./types";

const initialState: BookingsState = {
  bookings: [],
  isLoading: false,
  error: "",
};

const bookingsSlice = createSlice<
  typeof initialState,
  SliceCaseReducers<typeof initialState>,
  typeof REDUCER_KEY_BOOKINGS,
  SliceSelectors<typeof initialState>
>({
  name: REDUCER_KEY_BOOKINGS,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getBookings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBookings.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.bookings = payload;
      })
      .addCase(getBookings.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      })
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBooking.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.bookings.push(payload);
      })
      .addCase(createBooking.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBooking.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.bookings = state.bookings.filter(
          (booking) => booking.id !== payload
        );
      })
      .addCase(deleteBooking.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      });
  },
});

export default bookingsSlice.reducer;
