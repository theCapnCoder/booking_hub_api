import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface RejectedActionPayload {
  status?: number;
  message?: string;
}

const notificationMiddleware = createListenerMiddleware();

notificationMiddleware.startListening({
  predicate: (action) =>
    action.type.endsWith("/rejected") &&
    (action.payload as RejectedActionPayload)?.status !== 401,

  effect: (action) => {
    const { payload } = action;
    const errorMessage =
      (payload as RejectedActionPayload)?.message || "Something went wrong.";

    toast.error(errorMessage, { className: "notification" });
  },
});

export default notificationMiddleware;
