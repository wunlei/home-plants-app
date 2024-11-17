export interface PlantsState {
  plants: Plants;
}

export type Plants = {
  [id: string]: PlantProps;
};

export type PlantProps = {
  id: string;
  name: string;
  potPlacement: string;
  repotDate: string;
  growthStage: GrowthStages;
  lightRequirement: LightRequirements;
  notes: string;
};

export type FertilizerTypes =
  | "None"
  | "Balanced"
  | "High Nitrogen"
  | "Low Nitrogen"
  | "Organic";

export type LightRequirements =
  | "Full Sun"
  | "Indirect Sunlight"
  | "Partial Shade"
  | "Low Light";

export type GrowthStages = "Seedling" | "Young" | "Mature" | "Blooming";
