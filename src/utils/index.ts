import { useEffect, useState } from "react";
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

type plantDetail = {
  label: string;
  value: string;
};

export function getPlantDetails(plant: PlantProps) {
  const { growthStage, repotDate, potPlacement, lightRequirement } = plant;
  return [
    { label: "Pot placement", value: potPlacement },
    { label: "Light Requirement", value: lightRequirement },
    { label: "Growth stage", value: growthStage },
    { label: "Repot date", value: repotDate },
  ].filter((item): item is plantDetail => !!item.value);
}

export function formatDate(d: string) {
  const dateObj = new Date(d);

  const year = dateObj.getFullYear();
  const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
  const day = dateObj.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

const DELAY = 500;

export function useDebounceValue<T>(value: T, delay = DELAY) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
}
