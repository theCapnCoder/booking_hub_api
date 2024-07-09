import { createBrowserRouter, Navigate } from "react-router-dom";
import Bookings from "./pages/Bookings";
import MainPage from "./pages/MainPage";
import SighUp from "./pages/SighUp";
import SignIn from "./pages/SignIn";
import TripDetails from "./pages/TripDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";

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
        element: <SighUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
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
