export const BASE_URL = "http://localhost:3000";

export const ENDPOINTS = {
  plants: "/plants",
} as const;

type Endpoints = typeof ENDPOINTS;

export type EndpointsValues = Endpoints[keyof Endpoints];
