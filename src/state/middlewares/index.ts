import { Middleware } from "@reduxjs/toolkit";
import { localStorageKey } from "@/constants/store";

export const localStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);

    const state = storeAPI.getState();
    const plantsArray = state.plants.plants;
    const stateString = JSON.stringify(plantsArray);
    localStorage.setItem(localStorageKey, stateString);

    return result;
  };
