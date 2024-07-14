import axios, { AxiosHeaders, AxiosRequestConfig } from "axios";
import { CONTENT_TYPE_APPLICATION_JSON } from "../constants";
import { Keys } from "./types";
import { requestInterceptor } from "./interceptors";

const baseURL = "https://travel-app-api.up.railway.app/api/v1";

const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {
    "Content-Type": CONTENT_TYPE_APPLICATION_JSON,
  },
});

instance.interceptors.request.use(requestInterceptor);

const request = {
  get: <T>(url: string, headers?: AxiosHeaders) =>
    instance.get<T>(url, { headers }).then((result) => result),
  post: <T>(url: string, body?: Keys, config?: AxiosRequestConfig) =>
    instance.post<T>(url, body, config).then((result) => result),
};

export default request;
