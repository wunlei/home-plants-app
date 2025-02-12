import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Plants, PlantProps, PlantsState } from "@/state/plants/plants.types";

export const initialPlantsState: PlantsState = {
  plants: {},
  searchTerm: "",
  isError: false,
  isLoading: false,
  isCardLoading: false,
  isCardError: false,
  notification: {
    type: null,
    text: "",
  },
};

export const plantsSlice = createSlice({
  name: "plants",
  initialState: initialPlantsState,
  reducers: {
    addPlant(state, _action: PayloadAction<PlantProps>) {
      state.isCardLoading = true;
      state.isCardError = false;
    },
    addPlantFulfilled(state, action: PayloadAction<PlantProps>) {
      state.plants[action.payload.id] = action.payload;
      state.notification = {
        type: "success",
        text: "Successfully added",
      };
    },
    deletePlantById(state, _action: PayloadAction<string>) {
      state.isCardLoading = true;
      state.isCardError = false;
    },
    deletePlantByIdFulfilled(state, action: PayloadAction<string>) {
      delete state.plants[action.payload];
      state.notification = {
        type: "success",
        text: "Successfully deleted",
      };
    },
    updatePlantById(state, _action: PayloadAction<PlantProps>) {
      state.isCardLoading = true;
      state.isCardError = false;
    },
    updatePlantByIdFulfilled(state, action: PayloadAction<PlantProps>) {
      state.plants[action.payload.id] = action.payload;
      state.notification = {
        type: "success",
        text: "Successfully saved",
      };
    },
    updatePlants(state, action: PayloadAction<Plants>) {
      state.plants = action.payload;
    },
    getAllPlants(state) {
      state.isLoading = true;
      state.isError = false;
    },
    getAllPlantsFulfilled(state, action: PayloadAction<PlantProps[]>) {
      const plantsObject = Object.fromEntries(
        action.payload.map((plant) => [plant.id, plant]),
      );
      state.plants = plantsObject;
    },
    getPlantById(state, _action: PayloadAction<string>) {
      state.isLoading = true;
      state.isError = false;
    },
    getPlantByIdFulfilled(state, action: PayloadAction<PlantProps>) {
      state.plants[action.payload.id] = action.payload;
    },
    updateSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
    handleSuccessfulRequest(state) {
      state.isLoading = false;
      state.isError = false;
    },
    handleFailedRequest(state) {
      state.isLoading = false;
      state.isError = true;
    },
    handleSuccessfulRequestCard(state) {
      state.isCardLoading = false;
      state.isCardError = false;
    },
    handleFailedRequestCard(state) {
      state.isCardLoading = false;
      state.isCardError = true;
      state.notification = {
        type: "error",
        text: "Something went wrong. Please try again later.",
      };
    },
    resetNotification(state) {
      state.notification = {
        type: null,
        text: "",
      };
    },
  },
});

export const {
  addPlant,
  getAllPlants,
  getPlantById,
  updatePlants,
  deletePlantById,
  updatePlantById,
  updateSearchTerm,
  resetNotification,
  addPlantFulfilled,
  handleFailedRequest,
  getAllPlantsFulfilled,
  getPlantByIdFulfilled,
  handleFailedRequestCard,
  handleSuccessfulRequest,
  updatePlantByIdFulfilled,
  deletePlantByIdFulfilled,
  handleSuccessfulRequestCard,
} = plantsSlice.actions;

export default plantsSlice.reducer;
