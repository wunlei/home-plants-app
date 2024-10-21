import {
  LightRequirements,
  GrowthStages,
  PlantProps,
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
  plant?: PlantProps;
  formId: string;
  handleDataSubmit: (data: FormPlantValues) => void;
}
