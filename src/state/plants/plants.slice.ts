import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plant, PlantsState } from "@/state/plants/plants.types";
import { plantItemMock } from "@/constants";

export const initialPlantsState: PlantsState = {
  plants: [plantItemMock],
};

export const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: {
    addPlant(state, action: PayloadAction<Plant>) {
      state.plants.push(action.payload);
    },
    deletePlantById(state, action: PayloadAction<string>) {
      state.plants = state.plants.filter(
        (plant) => plant.id !== action.payload,
      );
    },
    updatePlantsArray(state, action: PayloadAction<Plant[]>) {
      state.plants = action.payload;
    },
  },
});

export const { addPlant, deletePlantById, updatePlantsArray } =
  plantsSlice.actions;

export default plantsSlice.reducer;
