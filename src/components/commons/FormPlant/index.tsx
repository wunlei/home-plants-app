import { useForm } from "react-hook-form";
import { formatDate } from "@/utils";
import {
  GROWTH_STAGES,
  LIGHT_REQUIREMENTS,
  validationScheme,
} from "@/constants/form";
import {
  FormPlantProps,
  FormPlantValues,
} from "@/components/commons/FormPlant/FormPlant.types";
import Input from "@/components/commons/Input";
import Select from "@/components/commons/Select";
import Textarea from "@/components/commons/Textarea";

function FormPlant({ plant, formId, handleDataSubmit }: FormPlantProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormPlantValues>();

  return (
    <form id={formId} onSubmit={handleSubmit(handleDataSubmit)}>
      <Input
        label="Name"
        name="name"
        defaultValue={plant?.name}
        register={register}
        error={errors.name}
        required
        options={validationScheme.name}
      />

      <Input
        label="Pot placement"
        name="potPlacement"
        defaultValue={plant?.potPlacement}
        register={register}
        error={errors.potPlacement}
        required
        options={validationScheme.potPlacement}
      />

      <Select
        label="Light requirement"
        name="lightRequirement"
        placeholder="Light requirement"
        defaultValue={plant?.lightRequirement}
        selectOptions={LIGHT_REQUIREMENTS}
        register={register}
      />

      <Select
        label="Growth stage"
        name="growthStage"
        placeholder="Growth stage"
        defaultValue={plant?.growthStage}
        selectOptions={GROWTH_STAGES}
        register={register}
      />

      <Input
        type="date"
        label="Repot date"
        name="repotDate"
        register={register}
        max={formatDate(new Date().toString())}
        defaultValue={plant?.repotDate}
      />

      <Textarea
        label="Notes"
        name="notes"
        register={register}
        defaultValue={plant?.notes}
      />
    </form>
  );
}

export default FormPlant;
