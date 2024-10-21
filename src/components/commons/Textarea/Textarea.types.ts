import {
  Path,
  FieldError,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";

export interface TextareaProps {
  label: string;
  name: Path<FormPlantValues>;
  defaultValue?: string;
  placeholder?: string;
  options?: RegisterOptions<FormPlantValues>;
  error?: FieldError;
  required?: boolean;
  register: UseFormRegister<FormPlantValues>;
}
