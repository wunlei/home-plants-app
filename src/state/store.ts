import { configureStore } from "@reduxjs/toolkit";
import { localStorageMiddleware } from "@/state/middlewares";
import plantsSlice from "@/state/plants/plants.slice";

export const store = configureStore({
  reducer: {
    plants: plantsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
