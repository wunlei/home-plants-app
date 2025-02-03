import { useAppSelector } from "@/state/hooks";
import {
  selectIsError,
  selectIsLoading,
  selectsPlantsIdsFiltered,
} from "@/state/plants/plants.selectors";
import Card from "@/components/Card";
import Loader from "@/components/commons/Loader";
import s from "./CardsList.module.scss";

function CardsList() {
  const plantIds = useAppSelector(selectsPlantsIdsFiltered);
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);

  if (isLoading) {
    return <Loader absolute />;
  }

  if (isError) {
    return <h2>Something went wrong</h2>;
  }

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
