import { PlantProps } from "@/state/plants/plants.types";

export interface PlantEditProps {
  plant: PlantProps;
  onClose: () => void;
}

export interface DialogProps {
  plant: PlantProps;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}
