import { localStorageKey } from "@/constants/store";
import { initialPlantsState } from "@/state/plants/plants.slice";
import { PlantProps } from "@/state/plants/plants.types";

export function getStateFromLS() {
  const lsItem = localStorage.getItem(localStorageKey);
  if (!lsItem) {
    return;
  }

  try {
    const plantsArray = JSON.parse(lsItem);

    const state = {
      plants: {
        ...initialPlantsState,
        plants: plantsArray,
      },
    };

    return state;
  } catch (e) {
    console.error(e);
  }
}

export function getPlantDetails(plant: PlantProps) {
  const { growthStage, repotDate, potPlacement, lightRequirement } = plant;
  return [
    { label: "Pot placement", value: potPlacement },
    { label: "Light Requirement", value: lightRequirement },
    { label: "Growth stage", value: growthStage },
    { label: "Repot date", value: repotDate },
  ];
}

export function formatDate(d: string) {
  const dateObj = new Date(d);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}
