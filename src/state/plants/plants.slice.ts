import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plants, PlantProps, PlantsState } from "@/state/plants/plants.types";
import { plantItemMock } from "@/constants/store";

export const initialPlantsState: PlantsState = {
  plants: { "1": plantItemMock },
};

export const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: {
    addPlant(state, action: PayloadAction<PlantProps>) {
      state.plants[action.payload.id] = action.payload;
    },
    deletePlantById(state, action: PayloadAction<string>) {
      delete state.plants[action.payload];
    },
    updatePlantById(state, action: PayloadAction<PlantProps>) {
      state.plants[action.payload.id] = action.payload;
    },
    updatePlantsArray(state, action: PayloadAction<Plants>) {
      state.plants = action.payload;
    },
  },
});

export const { addPlant, deletePlantById, updatePlantById, updatePlantsArray } =
  plantsSlice.actions;

export default plantsSlice.reducer;
