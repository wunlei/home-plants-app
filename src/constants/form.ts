import { LightRequirements, GrowthStages } from "@/state/plants/plants.types";

export const editFormId = "edit-form";

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

export const validationScheme = {
  name: {
    required: { value: true, message: "This field is required" },
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters long",
    },
  },
  potPlacement: {
    required: { value: true, message: "This field is required" },
    minLength: {
      value: 3,
      message: "Name must be at least 3 characters long",
    },
  },
};
