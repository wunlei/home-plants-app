import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import { HTMLInputTypeAttribute } from "react";
import {
  FieldError,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

export interface InputProps {
  type?: HTMLInputTypeAttribute;
  label: string;
  name: Path<FormPlantValues>;
  defaultValue?: string;
  placeholder?: string;
  error?: FieldError;
  required?: boolean;
  options?: RegisterOptions<FormPlantValues>;
  register: UseFormRegister<FormPlantValues>;
  max?: string;
}
