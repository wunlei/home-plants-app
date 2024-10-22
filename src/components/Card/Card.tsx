import { useState } from "react";
import { useAppSelector } from "@/state/hooks";
import { selectPlantById } from "@/state/plants/plants.selectors";
import { CardProps } from "@/components/Card/Card.types";
import Modal from "@/components/commons/Modal/Modal";
import Button from "@/components/commons/Button/Button";
import ViewIcon from "@/assets/view.svg";
import ViewPlant from "@/components/ViewPlant/ViewPlant";
import s from "./Card.module.scss";

function Card({ id }: CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plant = useAppSelector((state) => selectPlantById(state, id));

  if (!plant) {
    return null;
  }

  const { name, potPlacement } = plant;

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  return (
    <div className={s.card}>
      <img className={s.img} src="./pic.jpg" alt="plant" />
      <div className={s.header}>
        <h2 className={s.name}>{name}</h2>
        <p>{potPlacement}</p>
      </div>
      <div className={s.footer}>
        <Button icon={<ViewIcon />} onClick={() => handleModalOpen()}>
          View
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ViewPlant plant={plant} />
      </Modal>
    </div>
  );
}

export default Card;
