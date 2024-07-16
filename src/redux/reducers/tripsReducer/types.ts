import { Trip } from "../../../types/Trip";
export interface ITripsState {
  trips: Trip[] | [];
  currentTrip: Trip | undefined;
  isLoading: boolean;
  error: string;
}

export interface RejectValue {
  message: string;
  status?: number;
}
