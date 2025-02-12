import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import plantsSlice from "@/state/plants/plants.slice";
import rootSaga from "@/state/plants/plants.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    plants: plantsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);
