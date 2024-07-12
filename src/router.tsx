import React, { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import TripDetails from "./containers/Trips/TripDetails/TripDetails";
import MainLayout from "./layouts/MainLayout/MainLayout";
import BookingsPage from "./pages/BookingsPage/BookingsPage";
import MainPage from "./pages/MainPage/MainPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import { Booking } from "./types";

const App: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prevBookings) =>
      [...prevBookings, booking].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      )
    );
  };

  const removeBooking = (bookingId: string) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId)
    );
  };

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
          element: <TripDetails addBooking={addBooking} />,
        },
        {
          path: "/bookings",
          element: <BookingsPage bookings={bookings} onClose={removeBooking} />,
        },
        {
          path: "*",
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
