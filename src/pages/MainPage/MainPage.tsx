import AddIcon from "@/assets/add.svg";
import Button from "@/components/commons/Button/Button";
import CardsList from "@/components/CardsList/CardsList";
import s from "./MainPage.module.scss";

function MainPage() {
  return (
    <main>
      <h1 className={s.title}>Home plants</h1>
      <Button
        icon={<AddIcon />}
        classes={[s.btn]}
      >
        Add plant
      </Button>

      <CardsList />
    </main>
  );
}

export default MainPage;
