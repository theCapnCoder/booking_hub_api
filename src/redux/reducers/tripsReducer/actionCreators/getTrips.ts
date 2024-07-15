import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionTrips } from "../../../../api/concepts/trips/session";
import { TripsResponseData } from "../../../../api/concepts/trips/types";
import { getNameThunk } from "../helpers";
import { RejectValue } from "../types";

export const getTrips = createAsyncThunk<
  TripsResponseData,
  void,
  { rejectValue: RejectValue }
>(getNameThunk("allTrips"), async (_, { rejectWithValue }) => {
  try {
    const trips = await SessionTrips.getTrips("/trips");

    return trips.data;
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
