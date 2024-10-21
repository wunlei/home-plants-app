import { localStorageKey } from "@/constants";
import { Plant } from "@/state/plants/plants.types";
import { RootState } from "@/state/store.types";

export function getStateFromLS() {
  const lsItem = localStorage.getItem(localStorageKey);
  if (!lsItem) {
    return;
  }

  try {
    return JSON.parse(lsItem) as RootState;
  } catch (e) {
    console.error(e);
  }
}

export function getPlantDetails(plant: Plant) {
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
