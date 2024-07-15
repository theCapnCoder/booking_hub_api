import request from "../../instance";
import { Keys } from "../../types";
import { AuthResponseData, AuthUserResponseData } from "./types";

export const SessionAuth = {
  signUp: (url: string, model: Keys) =>
    request.post<AuthResponseData>(url, model),
  signIn: (url: string, model: Keys) =>
    request.post<AuthResponseData>(url, model),
  getAuthUser: (url: string) => request.get<AuthUserResponseData>(url),
};
