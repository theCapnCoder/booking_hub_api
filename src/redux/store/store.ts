import { configureStore } from "@reduxjs/toolkit";
import listenerMiddleware from "../middleware/authListenerMiddleware";
import { rootReducer } from "./rootReducer/rootReducer";

export type TRootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
