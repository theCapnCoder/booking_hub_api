import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { SessionAuth } from "../../../../api/concepts";
import { AuthResponseData } from "../../../../api/concepts/auth/types";
import { AuthRoutes, Tokens } from "../../../../constants";
import { getNameThunk } from "../../tripsReducer/helpers";
import { SignInParams } from "../types";

export const signIn = createAsyncThunk<
  AuthResponseData,
  SignInParams,
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
