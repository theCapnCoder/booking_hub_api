import request from "../../instance";
import { TripResponseData, TripsResponseData } from "./types";

export const SessionTrips = {
  getTrips: (url: string) => request.get<TripsResponseData>(url),
  getTripById: (url: string) => request.get<TripResponseData>(url),
};
