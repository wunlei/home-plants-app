import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/state/store.types";

const selectSlice = (state: RootState) => state.plants;

export const selectPlants = (state: RootState) => selectSlice(state).plants;
export const selectSearchTerm = (state: RootState) =>
  selectSlice(state).searchTerm;

export const selectPlantsIds = createSelector([selectPlants], (plants) =>
  Object.keys(plants),
);

export const selectsPlantsIdsFiltered = createSelector(
  [selectPlants, selectSearchTerm],
  (plants, searchTerm) => {
    if (!searchTerm) {
      return Object.keys(plants);
    }

    const filteredPlants = Object.keys(plants).filter((key) => {
      const { name, notes, potPlacement } = plants[key];
      return `${name} ${notes} ${potPlacement}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    return filteredPlants;
  },
);

export const selectPlantsValues = createSelector([selectPlants], (plants) =>
  Object.values(plants),
);

export const selectPlantById = createSelector(
  [selectPlants, (_state: RootState, id: string) => id],
  (plants, id) => plants[id],
);
