import { RootState } from "../store/types";

export const authUserSelector = (state: RootState) => state.auth.user;
