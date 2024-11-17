import { useState } from "react";
import AddIcon from "@/assets/add.svg";
import Button from "@/components/commons/Button/Button";
import Modal from "@/components/commons/Modal/Modal";
import CardsList from "@/components/CardsList/CardsList";
import AddPlant from "@/components/AddPlant/AddPlant";
import s from "./MainPage.module.scss";

function MainPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <h1 className={s.title}>Home plants</h1>
      <Button
        icon={<AddIcon />}
        onClick={() => {
          setIsModalOpen(true);
        }}
        classes={[s.btn]}
      >
        Add plant
      </Button>

      <CardsList />

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <AddPlant
            onClose={() => {
              setIsModalOpen(false);
            }}
          />
        </Modal>
      )}
    </main>
  );
}

export default MainPage;
