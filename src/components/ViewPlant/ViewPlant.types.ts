import { Plant } from "@/state/plants/plants.types";

export interface PlantViewProps {
  plant: Plant;
  onEdit?: () => void;
}
