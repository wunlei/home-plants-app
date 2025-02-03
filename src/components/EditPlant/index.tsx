import { useAppDispatch } from "@/state/hooks";
import { deletePlantById, updatePlantById } from "@/state/plants/plants.slice";
import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import { PlantEditProps } from "@/components/EditPlant/EditPlant.types";
import { editFormId } from "@/constants/form";
import DeleteIcon from "@/assets/delete.svg";
import FormPlant from "@/components/commons/FormPlant";
import Button from "@/components/commons/Button";
import s from "./EditPlant.module.scss";

function EditPlant({ plant, onClose }: PlantEditProps) {
  const dispatch = useAppDispatch();

  function handleSubmit(data: FormPlantValues) {
    dispatch(
      updatePlantById({
        ...plant,
        ...data,
      }),
    );
    onClose();
  }

  function handleDelete() {
    dispatch(deletePlantById(plant.id));
    onClose();
  }

  return (
    <div className={s.container}>
      <FormPlant
        formId={editFormId}
        plant={plant}
        handleDataSubmit={handleSubmit}
      />
      <div className={s.btnContainer}>
        <div className={s.btnWrapper}>
          <Button formId={editFormId} type="submit">
            Save
          </Button>
          <Button ghost onClick={onClose}>
            Cancel
          </Button>
        </div>
        <Button
          icon={<DeleteIcon />}
          onClick={handleDelete}
          classes={[s.btnDelete]}
        ></Button>
      </div>
    </div>
  );
}

export default EditPlant;
