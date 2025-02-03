import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { addPlant } from "@/state/plants/plants.slice";
import { PlantAddProps } from "@/components/AddPlant/AddPlant.types";
import {
  selectIsCardError,
  selectIsCardLoading,
} from "@/state/plants/plants.selectors";
import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import FormPlant from "@/components/commons/FormPlant";
import Button from "@/components/commons/Button";
import s from "./AddPlant.module.scss";

const formId = "add-plant-form";

function AddPlant({ onClose }: PlantAddProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsCardLoading);
  const isError = useAppSelector(selectIsCardError);

  const [isFormCompleted, setIsFormCompleted] = useState(false);

  function handleAddPlant(data: FormPlantValues) {
    const plant = {
      ...data,
      id: uuid(),
    };

    dispatch(addPlant(plant));
    setIsFormCompleted(true);
  }

  useEffect(() => {
    if (!isLoading && isFormCompleted && !isError) {
      onClose();
    }
  }, [dispatch, isError, isFormCompleted, isLoading, onClose]);

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
