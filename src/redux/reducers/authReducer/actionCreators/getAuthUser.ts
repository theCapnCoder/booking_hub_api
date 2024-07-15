import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { SessionAuth } from "../../../../api/concepts";
import { AuthUserResponseData } from "../../../../api/concepts/auth/types";
import { getNameThunk } from "../helpers";

export const getAuthUser = createAsyncThunk<
  AuthUserResponseData,
  void,
  { rejectValue: AxiosError }
>(getNameThunk("getAuthUser"), async (_, { rejectWithValue }) => {
  try {
    const authUser = await SessionAuth.getAuthUser("/auth/authenticated-user");

    return authUser.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error);
    }

    throw error;
  }
});
