import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/state/store.types";

const selectSlice = (state: RootState) => state.plants;

export const selectPlants = (state: RootState) => selectSlice(state).plants;

export const selectPlantsValues = createSelector([selectPlants], (plants) =>
  Object.values(plants),
);

export const selectPlantById = createSelector(
  [selectPlants, (_state: RootState, id: string) => id],
  (plants, id) => plants[id],
);
