import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/state/hooks";
import {
  selectIsCardLoading,
  selectPlantById,
} from "@/state/plants/plants.selectors";
import { CardProps } from "@/components/Card/Card.types";
import Modal from "@/components/commons/Modal";
import Button from "@/components/commons/Button";
import EditIcon from "@/assets/edit.svg";
import ViewIcon from "@/assets/view.svg";
import OpenIcon from "@/assets/open.svg";
import EditPlant from "@/components/EditPlant";
import ViewPlant from "@/components/ViewPlant";
import Image from "@/components/commons/Image";
import s from "./Card.module.scss";

function Card({ id }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const isLoading = useAppSelector(selectIsCardLoading);

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
      <Image
        alt="plant"
        classes={[s.img]}
        src="http://localhost:3000/pic.jpg"
        height={220}
        width={220}
      />
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
        <Link to={`plant/${id}`} target="_blank">
          <Button icon={<OpenIcon />} ghost></Button>
        </Link>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        isLoading={isLoading}
      >
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
