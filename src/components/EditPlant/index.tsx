import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { deletePlantById, updatePlantById } from "@/state/plants/plants.slice";
import { FormPlantValues } from "@/components/commons/FormPlant/FormPlant.types";
import {
  DialogProps,
  PlantEditProps,
} from "@/components/EditPlant/EditPlant.types";
import {
  selectIsCardError,
  selectIsCardLoading,
} from "@/state/plants/plants.selectors";
import { editFormId } from "@/constants/form";
import DeleteIcon from "@/assets/delete.svg";
import FormPlant from "@/components/commons/FormPlant";
import Button from "@/components/commons/Button";
import Modal from "@/components/commons/Modal";
import s from "./EditPlant.module.scss";

function EditPlant({ plant, onClose }: PlantEditProps) {
  const dispatch = useAppDispatch();
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isLoading = useAppSelector(selectIsCardLoading);
  const isError = useAppSelector(selectIsCardError);

  function handleSubmit(data: FormPlantValues) {
    dispatch(
      updatePlantById({
        ...plant,
        ...data,
      }),
    );
    setIsFormCompleted(true);
  }

  useEffect(() => {
    if (!isLoading && isFormCompleted && !isError) {
      onClose();
    }

    if (isError) {
      setIsDialogOpen(false);
    }
  }, [isFormCompleted, isError, isLoading, onClose]);

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
          onClick={() => setIsDialogOpen(true)}
          classes={[s.btnDelete]}
        ></Button>
      </div>
      <Dialog isOpen={isDialogOpen} plant={plant} setIsOpen={setIsDialogOpen} />
    </div>
  );
}

function Dialog({ setIsOpen, plant, isOpen }: DialogProps) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsCardLoading);

  function handleDelete() {
    dispatch(deletePlantById(plant.id));
  }

  return (
    <Modal
      isOpen={isOpen}
      isLoading={isLoading}
      onClose={() => setIsOpen(false)}
    >
      <div className={s.dialog}>
        <h3 className={s.dialogTitle}>Delete {plant.name}?</h3>
        <p className={s.dialogText}>
          Are you sure you want to delete this item?
        </p>
        <div className={s.btnContainer}>
          <Button onClick={() => setIsOpen(false)} ghost>
            Cancel
          </Button>
          <Button
            icon={<DeleteIcon />}
            onClick={handleDelete}
            classes={[s.btnDelete]}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default EditPlant;
