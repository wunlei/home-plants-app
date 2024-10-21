import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "@/state/middlewares";
import plantsSlice from "@/state/plants/plants.slice";
import { getStateFromLS } from "@/utils";

export const store = configureStore({
  reducer: {
    plants: plantsSlice,
  },
  preloadedState: getStateFromLS(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
