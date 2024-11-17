import { PlantProps } from "@/state/plants/plants.types";

export const localStorageKey = "plants-app";

export const plantItemMock: PlantProps = {
  id: "1",
  name: "Monstera Deliciosa",
  lightRequirement: "Partial Shade",
  repotDate: "2023-01-15",
  growthStage: "Mature",
  potPlacement: "Living room",
  notes:
    "New leaves are growing. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};
