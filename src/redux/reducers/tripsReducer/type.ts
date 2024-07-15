import { Trip } from "../../../types/Trip";

export interface ITripsState {
  trips: Trip[] | [];
  isLoading: boolean;
  error: string;
}
