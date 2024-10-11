import { createSlice } from "@reduxjs/toolkit";
import plantsReducers from "@/state/plants/plants.reducers";
import { PlantsState } from "@/state/plants/plants.types";
import { plantItemMock } from "@/constants";

export const initialPlantsState: PlantsState = {
  plants: [plantItemMock],
};

export const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: plantsReducers,
});

export const { addPlant, deletePlantById, updatePlantsArray } =
  plantsSlice.actions;

export default plantsSlice.reducer;
