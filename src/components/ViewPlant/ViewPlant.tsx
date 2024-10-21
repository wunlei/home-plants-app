import { clsx as c } from "clsx";
import { Fragment } from "react/jsx-runtime";
import { getPlantDetails } from "@/utils";
import { PlantViewProps } from "@/components/ViewPlant/ViewPlant.types";
import s from "./ViewPlant.module.scss";

function ViewPlant({ plant }: PlantViewProps) {
  const { name, notes } = plant;
  const details = getPlantDetails(plant);

  return (
    <div className={s.container}>
      <img src="./pic.jpg" alt={name} className={s.img} />
      <h2 className={s.title}>{name}</h2>
      <div className={s.details}>
        {details.map((detail, i) =>
          !detail.value ? null : (
            <Fragment key={i}>
              <span className={s.detailLabel}>{detail.label}</span>
              <span className={s.detailValue}>{detail.value}</span>
            </Fragment>
          ),
        )}
      </div>
      {notes && (
        <div>
          <p className={c(s.detailLabel, s.notes)}>Notes</p>
          <p className={s.detailValue}>{notes}</p>
        </div>
      )}
    </div>
  );
}

export default ViewPlant;
