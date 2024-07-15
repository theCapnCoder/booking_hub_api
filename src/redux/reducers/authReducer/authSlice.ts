import {
  createSlice,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { REDUCER_KEY_AUTH } from "../../../constants";
import { getAuthUser } from "./actionCreators/getAuthUser";
import { signUp } from "./actionCreators/singUp";
import { AuthState } from "./types";

const initialState: AuthState = {
  user: undefined,
  isLoading: false,
  error: "",
};

const AuthSlice = createSlice<
  AuthState,
  SliceCaseReducers<AuthState>,
  typeof REDUCER_KEY_AUTH,
  SliceSelectors<AuthState>
>({
  name: REDUCER_KEY_AUTH,
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      })
      .addCase(getAuthUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAuthUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(getAuthUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = (payload as AxiosError).message;
      });
  },
});

export default AuthSlice.reducer;
