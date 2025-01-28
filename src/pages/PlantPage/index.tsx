import { useParams } from "react-router-dom";
import { useAppSelector } from "@/state/hooks";
import { selectPlantById } from "@/state/plants/plants.selectors";
import Plant from "@/components/commons/Plant";
import s from "./PlantPage.module.scss";

function PlantPage() {
  const { id } = useParams();

  const plant = useAppSelector((state) => selectPlantById(state, id || ""));

  if (!plant) {
    return (
      <div className={s.container}>
        <h2 className={s.title}>No such plant</h2>
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
