import { createListenerMiddleware } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { Tokens } from "../../constants";
import { resetState } from "../reducers/authReducer/authSlice";

interface RejectedActionPayload {
  status: number;
}

const listenerMiddleware = createListenerMiddleware();

let hasShownUnauthorizedToast = false;

listenerMiddleware.startListening({
  predicate: (action) =>
    action.type.endsWith("/rejected") &&
    (action.payload as RejectedActionPayload)?.status === 401,

  effect: async (_, api) => {
    const { dispatch } = api;

    if (!hasShownUnauthorizedToast) {
      Cookies.remove(Tokens.Access);
      dispatch(resetState());

      toast.error("Unauthorized. Please sign in again.", { className: "notification" });
      hasShownUnauthorizedToast = true;
    }

    setTimeout(() => {
      hasShownUnauthorizedToast = false;
    }, 2000);
  },
});

export default listenerMiddleware;
