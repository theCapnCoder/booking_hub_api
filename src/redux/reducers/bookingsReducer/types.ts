import { Booking } from "../../../types/Booking";

export interface BookingsState {
  bookings: Booking[];
  isLoading: boolean;
  error: string;
}

export interface BookingsParams {
  tripId: string;
  guests: number;
  date: string;
}
