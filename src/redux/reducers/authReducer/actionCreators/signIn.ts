import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNameThunk } from "../../tripsReducer/helpers";
import { SessionAuth } from "../../../../api/concepts";
import { SignIpParams, SignUpAccessData } from "../types";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { AuthRoutes, Tokens } from "../../../../constants";

export const signIn = createAsyncThunk<
  SignUpAccessData,
  SignIpParams,
  { rejectValue: AxiosError }
>(getNameThunk("signIn"), async ({ email, password }, { rejectWithValue }) => {
  try {
    const signIn = await SessionAuth.signIn("/auth/sign-in", {
      email,
      password,
    });

    const { token } = signIn.data;

    Cookies.set(Tokens.Access, token, { path: AuthRoutes.RouteMain });

    return signIn.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }
    throw error;
  }
});
