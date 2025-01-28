import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import { Path, UseFormRegister } from "react-hook-form";

export interface SelectProps {
  label: string;
  name: Path<FormPlantValues>;
  defaultValue?: string | null;
  placeholder: string;
  selectOptions: string[];
  required?: boolean;
  register: UseFormRegister<FormPlantValues>;
}
