import { Trip } from "../../../types/Trip";
import request from "../../instance";

export const SessionTrips = {
  getAllTrips: (url: string) => request.get<Trip[]>(url),
};
