import { useAppSelector } from "@/state/hooks";
import { selectPlantById } from "@/state/plants/plants.selectors";
import { CardProps } from "@/components/Card/Card.types";
import Button from "@/components/commons/Button/Button";
import ViewIcon from "@/assets/view.svg";
import s from "./Card.module.scss";

function Card({ id }: CardProps) {
  const plant = useAppSelector((state) => selectPlantById(state, id));

  if (!plant) {
    return null;
  }

  const { name, potPlacement } = plant;

  return (
    <div className={s.card}>
      <img className={s.img} src="./pic.jpg" alt="plant" />
      <div className={s.header}>
        <h2 className={s.name}>{name}</h2>
        <p>{potPlacement}</p>
      </div>
      <div className={s.footer}>
        <Button icon={<ViewIcon />}>View</Button>
      </div>
    </div>
  );
}

export default Card;
