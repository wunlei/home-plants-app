import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import {
  selectIsError,
  selectIsLoading,
  selectPlantById,
} from "@/state/plants/plants.selectors";
import { getPlantById } from "@/state/plants/plants.slice";
import Loader from "@/components/commons/Loader";
import Plant from "@/components/commons/Plant";
import s from "./PlantPage.module.scss";

function PlantPage() {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);

  useEffect(() => {
    if (id) {
      dispatch(getPlantById(id));
    }
  }, []);

  const plant = useAppSelector((state) => selectPlantById(state, id || ""));

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className={s.container}>
        <h2 className={s.title}>Something went wrong</h2>
      </div>
    );
  }

  if (!plant) {
    return (
      <div className={s.container}>
        <h2 className={s.title}>Plant not found</h2>
      </div>
    );
  }

  return (
    <div className={s.container}>
      <Plant plant={plant} />
    </div>
  );
}

export default PlantPage;
