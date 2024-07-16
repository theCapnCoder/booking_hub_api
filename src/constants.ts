export enum GuestRoutes {
  RouteSignUp = "/sign-up",
  RouteSignIn = "/sign-in",
}

export enum AuthRoutes {
  RouteMain = "/",
  RouteTripDetails = "/trip/:tripId",
  RouteBookings = "/bookings",
}

export const CONTENT_TYPE_APPLICATION_JSON = "application/json";

export const REDUCER_KEY_AUTH = "auth";
export const REDUCER_KEY_TRIPS = "trips";
export const REDUCER_KEY_BOOKINGS = "bookings";

export enum Tokens {
  Access = "accessToken",
}
