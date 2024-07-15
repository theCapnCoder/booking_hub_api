import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionBookings } from "../../../../api/concepts";
import { getNameThunk } from "../helpers";
import { RejectValue } from "../types";

export const deleteBooking = createAsyncThunk<
  string,
  string,
  { rejectValue: RejectValue }
>(getNameThunk("deleteBooking"), async (bookingId, { rejectWithValue }) => {
  try {
    await SessionBookings.deleteBooking(`/bookings/${bookingId}`);
    return bookingId;
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
