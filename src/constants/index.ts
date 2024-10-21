import {
  FertilizerTypes,
  GrowthStages,
  LightRequirements,
  Plant,
} from "@/state/plants/plants.types";

export const FERTILISER_TYPES: FertilizerTypes[] = [
  "None",
  "Balanced",
  "High Nitrogen",
  "Low Nitrogen",
  "Organic",
];

export const LIGHT_REQUIREMENTS: LightRequirements[] = [
  "Full Sun",
  "Indirect Sunlight",
  "Partial Shade",
  "Low Light",
];

export const GROWTH_STAGES: GrowthStages[] = [
  "Seedling",
  "Young",
  "Mature",
  "Blooming",
];

export const localStorageKey = "plants-app";

export const plantItemMock: Plant = {
  id: "1",
  name: "Monstera Deliciosa",
  lightRequirement: "Partial Shade",
  repotDate: "2023-01-15",
  growthStage: "Mature",
  potPlacement: "Living room",
  notes:
    "New leaves are growing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

export const MODAL_MODES = {
  edit: "edit",
  view: "view",
} as const;
