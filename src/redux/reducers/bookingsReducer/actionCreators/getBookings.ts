import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionBookings } from "../../../../api/concepts";
import { Booking } from "../../../../types/Booking";
import { getNameThunk } from "../helpers";
import { RejectValue } from "../types";

export const getBookings = createAsyncThunk<
  Booking[],
  void,
  { rejectValue: RejectValue }
>(getNameThunk("getBookings"), async (_, { rejectWithValue }) => {
  try {
    const response = await SessionBookings.getBookings("/bookings");
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue({
        message: error.message,
        status: error.response?.status,
      });
    }

    throw error;
  }
});
