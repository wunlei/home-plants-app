import { Middleware } from "@reduxjs/toolkit";
import { localStorageKey } from "@/constants";

export const localStorageMiddleware: Middleware =
  (storeAPI) => (next) => (action) => {
    const result = next(action);

    const state = storeAPI.getState();
    const stateString = JSON.stringify(state);
    localStorage.setItem(localStorageKey, stateString);

    return result;
  };
