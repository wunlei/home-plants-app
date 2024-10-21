import { PlantProps } from "@/state/plants/plants.types";

export interface PlantViewProps {
  plant: PlantProps;
  onEdit?: () => void;
}
