import { PlantProps } from "@/state/plants/plants.types";

export type FormPlantValues = Omit<PlantProps, "id">;

export interface FormPlantProps {
  plant?: PlantProps;
  formId: string;
  disabled?: boolean;
  handleDataSubmit: (data: FormPlantValues) => void;
}
