import request from "../../instance";
import { TripResponseData, TripsResponseData } from "./types";

export const SessionTrips = {
  getAllTrips: (url: string) => request.get<TripsResponseData>(url),
  getTripById: (url: string) => request.get<TripResponseData>(url),
};
