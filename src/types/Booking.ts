export interface Trip {
  title: string;
  duration: number;
  price: number;
}

export interface Booking {
  id: string;
  tripId: string;
  userId: string;
  guests: number;
  totalPrice: number;
  date: string;
  createdAt: string;
  trip: Trip;
}
