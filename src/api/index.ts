import { fetchWrapper, getBaseURL } from "@/utils/api";
import { PlantProps } from "@/state/plants/plants.types";

export function apiGetPlants(): Promise<PlantProps[]> {
  const url = getBaseURL({});
  const options = { method: "GET" };

  return fetchWrapper(fetch(url, options)).then((response) => response.json());
}

export function apiGetPlantById(id: string): Promise<PlantProps> {
  const url = getBaseURL({ additionalPath: id });
  const options = { method: "GET" };

  return fetchWrapper(fetch(url, options)).then((response) => response.json());
}

export function apiAddPlant(plant: PlantProps) {
  const url = getBaseURL({});
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(plant),
  };

  return fetchWrapper(fetch(url, options));
}

export function apiDeletePlant(id: string) {
  const url = getBaseURL({ additionalPath: id });
  const options = {
    method: "DELETE",
  };

  return fetchWrapper(fetch(url, options));
}

export function apiUpdatePlant(plant: PlantProps) {
  const { id } = plant;
  const url = getBaseURL({ additionalPath: id });
  const options = {
    method: "PUT",
    body: JSON.stringify(plant),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetchWrapper(fetch(url, options));
}
