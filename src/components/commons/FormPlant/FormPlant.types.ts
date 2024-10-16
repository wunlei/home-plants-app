import {
  LightRequirements,
  GrowthStages,
  Plant,
} from "@/state/plants/plants.types";

export interface FormPlantValues {
  name: string;
  potPlacement: string;
  lightRequirement: LightRequirements;
  growthStage: GrowthStages;
  repotDate: string;
  notes: string;
}

export interface FormPlantProps {
  plant?: Plant;
  formId: string;
  handleDataSubmit: (data: FormPlantValues) => void;
}
