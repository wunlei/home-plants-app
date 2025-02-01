import { fetchWrapper } from "@/utils/api";
import { ENDPOINTS, BASE_URL } from "@/constants/api";
import { PlantProps } from "@/state/plants/plants.types";

export function apiGetPlants(): Promise<PlantProps[]> {
  const url = new URL(ENDPOINTS.plants, BASE_URL);
  const options = { method: "GET" };

  return fetchWrapper(fetch(url, options)).then((response) => response.json());
}

export function apiGetPlantById(id: string): Promise<PlantProps> {
  const url = new URL(`${ENDPOINTS.plants}/${id}`, BASE_URL);
  const options = { method: "GET" };

  return fetchWrapper(fetch(url, options)).then((response) => response.json());
}

export function apiAddPlant(plant: PlantProps) {
  const url = new URL(ENDPOINTS.plants, BASE_URL);
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
  const url = new URL(`${ENDPOINTS.plants}/${id}`, BASE_URL);
  const options = {
    method: "DELETE",
  };

  return fetchWrapper(fetch(url, options));
}

export function apiUpdatePlant(plant: PlantProps) {
  const url = new URL(`${ENDPOINTS.plants}/${plant.id}`, BASE_URL);
  const options = {
    method: "PUT",
    body: JSON.stringify(plant),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetchWrapper(fetch(url, options));
}
