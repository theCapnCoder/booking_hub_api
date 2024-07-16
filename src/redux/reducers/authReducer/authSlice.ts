import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { REDUCER_KEY_AUTH } from "../../../constants";
import { getAuthUser } from "./actionCreators/getAuthUser";
import { signUp } from "./actionCreators/singUp";
import { AuthState } from "./types";
import { signIn } from "./actionCreators";

const initialState: AuthState = {
  user: undefined,
  isLoading: false,
  error: "",
};

const AuthSlice = createSlice({
  name: REDUCER_KEY_AUTH,
  initialState,
  reducers: {
    resetState: () => initialState,
  },
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
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
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

export const { resetState } = AuthSlice.actions;
export default AuthSlice.reducer;
