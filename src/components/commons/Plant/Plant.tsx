import { Fragment } from "react/jsx-runtime";
import { clsx as c } from "clsx";
import { getPlantDetails } from "@/utils";
import { PlantProps } from "@/state/plants/plants.types";
import s from "./Plant.module.scss";

function Plant({ plant }: { plant: PlantProps }) {
  const { name, notes } = plant;

  const details = getPlantDetails(plant);

  return (
    <>
      <img src="../pic.jpg" alt={name} className={s.img} />
      <h2 className={s.title}>{name}</h2>
      <div className={s.details}>
        {details.map((detail, i) => (
          <Fragment key={i}>
            <span className={s.detailLabel}>{detail.label}</span>
            <span className={s.detailValue}>{detail.value}</span>
          </Fragment>
        ))}
      </div>
      {notes && (
        <div>
          <p className={c(s.detailLabel, s.notes)}>Notes</p>
          <p className={s.detailValue}>{notes}</p>
        </div>
      )}
    </>
  );
}
export default Plant;
