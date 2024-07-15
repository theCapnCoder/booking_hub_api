import {
  createSlice,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { REDUCER_KEY_TRIPS } from "../../../constants";
import { ITripsState } from "./type";
import { AxiosError } from "axios";
import { getAllTrips } from "./actionCreators";

const initialState: ITripsState = {
  trips: [],
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
      .addCase(getAllTrips.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTrips.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.trips = payload;
      })
      .addCase(getAllTrips.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      });
  },
});

export default tripsSlice.reducer;
