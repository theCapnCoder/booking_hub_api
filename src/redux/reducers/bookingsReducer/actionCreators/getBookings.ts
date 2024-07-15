import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionBookings } from "../../../../api/concepts";
import { Booking } from "../../../../types/Booking";
import { getNameThunk } from "../helpers";

export const getBookings = createAsyncThunk<
  Booking[],
  void,
  { rejectValue: AxiosError }
>(getNameThunk("getBookings"), async (_, { rejectWithValue }) => {
  try {
    const response = await SessionBookings.getBookings("/bookings");

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }

    throw error;
  }
});
