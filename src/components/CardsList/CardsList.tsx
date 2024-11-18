import { useAppSelector } from "@/state/hooks";
import { selectPlantsIds } from "@/state/plants/plants.selectors";
import Card from "@/components/Card/Card";
import s from "./CardsList.module.scss";

function CardsList() {
  const plantIds = useAppSelector(selectPlantsIds);

  return (
    <div className={s.container}>
      {plantIds.map((id) => (
        <Card key={id} id={id} />
      ))}
    </div>
  );
}

export default CardsList;
