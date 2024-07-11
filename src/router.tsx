import { createBrowserRouter, Navigate } from "react-router-dom";
import TripDetails from "./containers/Trips/TripDetails/TripDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "/trip/:tripId",
        element: <TripDetails />,
      },
      {
        path: "/bookings",
        element: <BookingsPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
