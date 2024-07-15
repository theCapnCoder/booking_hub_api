import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionBookings } from "../../../../api/concepts/bookings/session";
import { Booking } from "../../../../types/Booking";
import { getNameThunk } from "../helpers";
import { BookingsParams, RejectValue } from "../types";

export const createBooking = createAsyncThunk<
  Booking,
  BookingsParams,
  { rejectValue: RejectValue }
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
        return rejectWithValue({
          message: error.message,
          status: error.response?.status,
        });
      }
      
      throw error;
    }
  }
);
