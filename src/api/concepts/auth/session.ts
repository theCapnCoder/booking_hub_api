import request from "../../instance";
import { Keys } from "../../types";
import { AuthResponseData } from "./types";

export const SessionAuth = {
  signUp: (url: string, model: Keys) =>
    request.post<AuthResponseData>(url, model),
  signIn: (url: string, model: Keys) =>
    request.post<AuthResponseData>(url, model),
};
