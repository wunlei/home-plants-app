import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@/state/hooks";
import { updateSearchTerm } from "@/state/plants/plants.slice";
import AddIcon from "@/assets/add.svg";
import Button from "@/components/commons/Button";
import Modal from "@/components/commons/Modal";
import CardsList from "@/components/CardsList";
import AddPlant from "@/components/AddPlant";
import SearchBar from "@/components/commons/SearchBar";
import s from "./MainPage.module.scss";

function MainPage() {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const handleSearchTermUpdate = useCallback(
    (value: string) => {
      dispatch(updateSearchTerm(value));
      setSearchParams({ search: value });
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
