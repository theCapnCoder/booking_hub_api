import { AxiosError } from "axios";
import { getNameThunk } from "../helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SessionTrips } from "../../../../api/concepts";
import { TripResponseData } from "../../../../api/concepts/trips/types";

export const getTripById = createAsyncThunk<
  TripResponseData,
  string,
  { rejectValue: AxiosError }
>(getNameThunk("getTripById"), async (tripId, { rejectWithValue }) => {
  try {
    const trip = await SessionTrips.getTripById(`/trips/${tripId}`);

    return trip.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
