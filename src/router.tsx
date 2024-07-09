import { createBrowserRouter, Navigate } from "react-router-dom";
import Bookings from "./pages/Bookings";
import MainPage from "./pages/MainPage";
import TripDetails from "./pages/TripDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
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
        element: <Bookings />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

export default router;
