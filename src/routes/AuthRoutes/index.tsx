import TripDetails from "../../containers/Trips/TripDetails/TripDetails";
import BookingsPage from "../../pages/BookingsPage/BookingsPage";
import MainPage from "../../pages/MainPage/MainPage";
import AuthGuard from "../guards/AuthGuard";

import { AuthRoutes } from "../../constants";

const rawAuthRoutes = [
  {
    path: AuthRoutes.RouteMain,
    element: MainPage,
  },
  {
    path: AuthRoutes.RouteTripDetails,
    element: TripDetails,
  },
  {
    path: AuthRoutes.RouteBookings,
    element: BookingsPage,
  },
];

export const adminRoutes = rawAuthRoutes.map((route) => ({
  ...route,
  element: <AuthGuard isAuth={false} component={route.element} />,
}));
