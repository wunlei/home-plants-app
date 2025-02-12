export interface PlantsState {
  plants: Plants;
  searchTerm: string;
  isLoading: boolean;
  isError: boolean;
  isCardLoading: boolean;
  isCardError: boolean;
  notification: Notification;
}

export type Notification = {
  type: "info" | "error" | "success" | null;
  text: string;
};

export type Plants = {
  [id: string]: PlantProps;
};

export type PlantProps = {
  id: string;
  name: string;
  potPlacement: string;
  repotDate: string | null;
  growthStage: GrowthStages | null;
  lightRequirement: LightRequirements | null;
  notes: string | null;
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
