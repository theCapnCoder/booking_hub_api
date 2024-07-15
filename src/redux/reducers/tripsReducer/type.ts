import { Trip } from "../../../types/Trip";

export interface ITripsState {
  trips: Trip[] | [];
  currentTrip: Trip | undefined;
  isLoading: boolean;
  error: string;
}
