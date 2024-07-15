import request from "../../instance";
import { TripsResponseData } from "./types";

export const SessionTrips = {
  getAllTrips: (url: string) => request.get<TripsResponseData>(url),
};
