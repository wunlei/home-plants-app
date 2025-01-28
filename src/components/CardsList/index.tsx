import { useAppSelector } from "@/state/hooks";
import { selectsPlantsIdsFiltered } from "@/state/plants/plants.selectors";
import Card from "@/components/Card";
import s from "./CardsList.module.scss";

function CardsList() {
  const plantIds = useAppSelector(selectsPlantsIdsFiltered);

  return (
    <div className={s.container}>
      {plantIds.map((id) => (
        <Card key={id} id={id} />
      ))}
      {!plantIds.length && <p>No items found</p>}
    </div>
  );
}

export default CardsList;
