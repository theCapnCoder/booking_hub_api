import { FC } from "react";
import { Navigate } from "react-router-dom";
import { GuestRoutes } from "../../../constants";

type Props = {
  component: React.ElementType;
  isAuth: boolean;
};

const AuthGuard: FC<Props> = ({ component: Component, isAuth }) => {
  if (!isAuth) {
    return <Navigate to={GuestRoutes.RouteSignIn} replace />;
  }
  return <Component />;
};

export default AuthGuard;
