import { memo, useState } from "react";
import { useAppSelector } from "@/state/hooks";
import { selectPlantById } from "@/state/plants/plants.selectors";
import { CardProps } from "@/components/Card/Card.types";
import Modal from "@/components/commons/Modal/Modal";
import Button from "@/components/commons/Button/Button";
import EditIcon from "@/assets/edit.svg";
import ViewIcon from "@/assets/view.svg";
import EditPlant from "@/components/EditPlant/EditPlant";
import ViewPlant from "@/components/ViewPlant/ViewPlant";
import s from "./Card.module.scss";

function Card({ id }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const plant = useAppSelector((state) => selectPlantById(state, id));

  if (!plant) {
    return null;
  }

  const { name, potPlacement } = plant;

  function handleModalClose() {
    setIsModalOpen(false);
    setIsEditing(false);
  }

  function handleModalOpen(isEditing: boolean) {
    setIsModalOpen(true);
    setIsEditing(isEditing);
  }

  return (
    <div className={s.card}>
      <img className={s.img} src="./pic.jpg" alt="plant" />
      <div className={s.header}>
        <h2 className={s.name}>{name}</h2>
        <p>{potPlacement}</p>
      </div>
      <div className={s.footer}>
        <Button icon={<EditIcon />} onClick={() => handleModalOpen(true)}>
          Edit
        </Button>
        <Button icon={<ViewIcon />} onClick={() => handleModalOpen(false)}>
          View
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {isEditing ? (
          <EditPlant onClose={handleModalClose} plant={plant} />
        ) : (
          <ViewPlant
            onEdit={() => {
              setIsEditing(true);
            }}
            plant={plant}
          />
        )}
      </Modal>
    </div>
  );
}

export default memo(Card);
