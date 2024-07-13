import { GuestRoutes } from "../../constants";
import SignInPage from "../../pages/SignInPage/SignInPage";
import SignUpPage from "../../pages/SignUpPage/SignUpPage";

export const guestRoutes = [
  {
    path: GuestRoutes.RouteSignUp,
    element: <SignUpPage />,
  },
  {
    path: GuestRoutes.RouteSignIn,
    element: <SignInPage />,
  },
];
