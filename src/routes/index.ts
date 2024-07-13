import { adminRoutes } from "./AuthRoutes";
import { guestRoutes } from "./GuestRoutes";

export const userRoutes = [...adminRoutes, ...guestRoutes];
