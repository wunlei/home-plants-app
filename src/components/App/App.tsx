import { useEffect } from "react";
import { useAppDispatch } from "@/state/hooks";
import { getStateFromLS } from "@/utils";
import { updatePlantsArray } from "@/state/plants/plants.slice";
import MainPage from "@/pages/MainPage/MainPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const plants = getStateFromLS()?.plants.plants;
    if (plants) {
      dispatch(updatePlantsArray(plants));
    }
  }, []);

  return <MainPage />;
}

export default App;
