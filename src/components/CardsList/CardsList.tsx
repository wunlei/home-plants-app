import { useAppSelector } from "@/state/hooks";
import { selectPlants } from "@/state/plants/plants.selectors";
import Card from "@/components/Card/Card";
import s from "./CardsList.module.scss";

function CardsList() {
  const plants = useAppSelector(selectPlants);

  return (
    <div className={s.container}>
      {plants.map((plant) => (
        <Card key={plant.id} id={plant.id} />
      ))}
    </div>
  );
}

export default CardsList;
