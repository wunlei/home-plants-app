import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import { Path, FieldError } from "react-hook-form";

export interface InputWrapperProps extends React.PropsWithChildren {
  label: string;
  name: Path<FormPlantValues>;
  error?: FieldError;
  required?: boolean;
}
