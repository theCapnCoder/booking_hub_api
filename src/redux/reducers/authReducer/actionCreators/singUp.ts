import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import Cookies from "js-cookie";
import { SessionAuth } from "../../../../api/concepts";
import { AuthResponseData } from "../../../../api/concepts/auth/types";
import { AuthRoutes, Tokens } from "../../../../constants";
import { getNameThunk } from "../helpers";
import { SignUpParams } from "../types";

export const signUp = createAsyncThunk<
  AuthResponseData,
  SignUpParams,
  { rejectValue: AxiosError }
>(
  getNameThunk("signUp"),
  async ({ fullName, email, password }, { rejectWithValue }) => {
    try {
      const signUp = await SessionAuth.signUp("/auth/sign-up", {
        fullName,
        email,
        password,
      });

      const { token } = signUp.data;
      Cookies.set(Tokens.Access, token, { path: AuthRoutes.RouteMain });

      return signUp.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error);
      }
      throw error;
    }
  }
);
