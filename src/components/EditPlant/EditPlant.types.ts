import { PlantProps } from "@/state/plants/plants.types";

export interface PlantEditProps {
  plant: PlantProps;
  onClose: () => void;
}
