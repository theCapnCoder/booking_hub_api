import { InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
import { Tokens } from "../../constants";

export const requestInterceptor = (request: InternalAxiosRequestConfig) => {
  const accessToken = Cookies.get(Tokens.Access);

  if (accessToken && request.headers) {
    request.headers.authorization = `Bearer ${accessToken}`;
  }

  return request;
};
