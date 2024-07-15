import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionTrips } from "../../../../api/concepts/trips/session";
import { TripResponseData } from "../../../../api/concepts/trips/types";
import { getNameThunk } from "../helpers";
import { RejectValue } from "../types";

export const getTripById = createAsyncThunk<
  TripResponseData,
  string,
  { rejectValue: RejectValue }
>(getNameThunk("getTripById"), async (tripId, { rejectWithValue }) => {
  try {
    const trip = await SessionTrips.getTripById(`/trips/${tripId}`);
    return trip.data;
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
