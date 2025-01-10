import { PlantViewProps } from "@/components/ViewPlant/ViewPlant.types";
import EditIcon from "@/assets/edit.svg";
import Button from "@/components/commons/Button/Button";
import Plant from "@/components/commons/Plant/Plant";
import s from "./ViewPlant.module.scss";

function ViewPlant({ plant, onEdit }: PlantViewProps) {
  return (
    <div className={s.container}>
      <Plant plant={plant} />
      <div className={s.btnContainer}>
        <Button icon={<EditIcon />} onClick={onEdit}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ViewPlant;
