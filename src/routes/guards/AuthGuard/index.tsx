import { FC } from "react";
import { Navigate } from "react-router-dom";
import { GuestRoutes, Tokens } from "../../../constants";
import Cookies from "js-cookie";

type Props = {
  component: React.ElementType;
};

const AuthGuard: FC<Props> = ({ component: Component }) => {
  const isAuthLocal = Boolean(Cookies.get(Tokens.Access));

  if (!isAuthLocal) {
    return <Navigate to={GuestRoutes.RouteSignIn} replace />;
  }
  return <Component />;
};

export default AuthGuard;
