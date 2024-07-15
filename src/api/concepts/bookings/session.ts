import request from "../../instance";
import { Keys } from "../../types";
import {
  CreateBookingResponse,
  DeleteBookingResponse,
  GetAllBookingsResponse,
} from "./types";

export const SessionBookings = {
  getAllBookings: (url: string) => request.get<GetAllBookingsResponse>(url),
  createBooking: (url: string, model: Keys) =>
    request.post<CreateBookingResponse>(url, model),
  deleteBooking: (url: string) => request.delete<DeleteBookingResponse>(url),
};
