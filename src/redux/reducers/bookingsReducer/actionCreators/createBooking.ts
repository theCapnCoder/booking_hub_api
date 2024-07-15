import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionBookings } from "../../../../api/concepts/bookings/session";
import { Booking } from "../../../../types/Booking";
import { getNameThunk } from "../helpers";
import { BookingsParams } from "../types";

export const createBooking = createAsyncThunk<
  Booking,
  BookingsParams,
  { rejectValue: AxiosError }
>(
  getNameThunk("createBooking"),
  async ({ tripId, guests, date }, { rejectWithValue }) => {
    try {
      const response = await SessionBookings.createBooking("/bookings", {
        tripId,
        guests,
        date,
      });

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error);
      }
      throw error;
    }
  }
);
