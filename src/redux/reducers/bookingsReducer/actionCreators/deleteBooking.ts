import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionBookings } from "../../../../api/concepts";
import { getNameThunk } from "../helpers";

export const deleteBooking = createAsyncThunk<
  string,
  string,
  { rejectValue: AxiosError }
>(getNameThunk("deleteBooking"), async (bookingId, { rejectWithValue }) => {
  try {
    await SessionBookings.deleteBooking(`/bookings/${bookingId}`);

    return bookingId;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
