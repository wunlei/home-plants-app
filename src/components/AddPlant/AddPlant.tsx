import { v4 as uuid } from "uuid";
import { useAppDispatch } from "@/state/hooks";
import { addPlant } from "@/state/plants/plants.slice";
import { PlantAddProps } from "@/components/AddPlant/AddPlant.types";
import Button from "@/components/commons/Button/Button";
import FormPlant from "@/components/commons/FormPlant/FormPlant";
import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import s from "./AddPlant.module.scss";

const formId = "add-plant-form";

function AddPlant({ onClose }: PlantAddProps) {
  const dispatch = useAppDispatch();

  function handleAddPlant(data: FormPlantValues) {
    const plant = {
      ...data,
      id: uuid(),
    };

    dispatch(addPlant(plant));
    onClose();
  }

  return (
    <div className={s.container}>
      <FormPlant formId={formId} handleDataSubmit={handleAddPlant} />
      <div className={s.btnContainer}>
        <Button formId={formId} type="submit">
          Save
        </Button>
        <Button onClick={onClose} ghost>
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default AddPlant;
