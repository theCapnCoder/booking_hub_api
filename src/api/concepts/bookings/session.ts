import request from "../../instance";
import { Keys } from "../../types";
import {
  CreateBookingResponse,
  DeleteBookingResponse,
  GetBookingsResponse,
} from "./types";

export const SessionBookings = {
  getBookings: (url: string) => request.get<GetBookingsResponse>(url),
  createBooking: (url: string, model: Keys) =>
    request.post<CreateBookingResponse>(url, model),
  deleteBooking: (url: string) => request.delete<DeleteBookingResponse>(url),
};
