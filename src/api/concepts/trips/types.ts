import { Trip } from "../../../types/Trip";

export type TripsResponseData = Trip[];

export interface TripResponseData {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}
