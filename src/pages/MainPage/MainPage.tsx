import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { updateSearchTerm } from "@/state/plants/plants.slice";
import { selectSearchTerm } from "@/state/plants/plants.selectors";
import AddIcon from "@/assets/add.svg";
import Button from "@/components/commons/Button/Button";
import Modal from "@/components/commons/Modal/Modal";
import CardsList from "@/components/CardsList/CardsList";
import AddPlant from "@/components/AddPlant/AddPlant";
import SearchBar from "@/components/commons/SearchBar/SearchBar";
import s from "./MainPage.module.scss";

function MainPage() {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchTerm = useAppSelector(selectSearchTerm);

  const handleSearchTermUpdate = useCallback(
    (value: string) => {
      dispatch(updateSearchTerm(value));
    },
    [dispatch],
  );

  return (
    <main className={s.main}>
      <h1 className={s.title}>Home plants</h1>
      <SearchBar value={searchTerm} onChange={handleSearchTermUpdate} />
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
