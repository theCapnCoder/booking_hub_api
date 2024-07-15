import {
  createSlice,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { REDUCER_KEY_TRIPS } from "../../../constants";
import { ITripsState } from "./type";
import { AxiosError } from "axios";
import { getTrips } from "./actionCreators";
import { getTripById } from "./actionCreators/getTripById";

const initialState: ITripsState = {
  trips: [],
  currentTrip: undefined,
  error: "",
  isLoading: true,
};

const tripsSlice = createSlice<
  ITripsState,
  SliceCaseReducers<ITripsState>,
  typeof REDUCER_KEY_TRIPS,
  SliceSelectors<ITripsState>
>({
  name: REDUCER_KEY_TRIPS,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getTrips.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTrips.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.trips = payload;
      })
      .addCase(getTrips.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      })
      .addCase(getTripById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTripById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentTrip = payload;
      })
      .addCase(getTripById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      });
  },
});

export default tripsSlice.reducer;
