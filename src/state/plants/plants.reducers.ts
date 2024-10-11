import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { PlantsState, Plant } from "@/state/plants/plants.types";

const addPlant: CaseReducer<PlantsState, PayloadAction<Plant>> = (
  state,
  action,
) => {
  state.plants.push(action.payload);
};

const deletePlantById: CaseReducer<PlantsState, PayloadAction<string>> = (
  state,
  action,
) => {
  state.plants = state.plants.filter((plant) => plant.id !== action.payload);
};

const updatePlantsArray: CaseReducer<PlantsState, PayloadAction<Plant[]>> = (
  state,
  action,
) => {
  state.plants = action.payload;
};

const plantsReducers = { addPlant, deletePlantById, updatePlantsArray };

export default plantsReducers;
