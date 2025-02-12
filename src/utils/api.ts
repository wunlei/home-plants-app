import { BASE_URL, ENDPOINTS, EndpointsValues } from "@/constants/api";

export function fetchWrapper(promise: Promise<Response>) {
  return promise.then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });
}

type GetBaseURLParams = {
  endpoint?: EndpointsValues;
  additionalPath?: string;
};

export const getBaseURL = ({
  endpoint = ENDPOINTS.plants,
  additionalPath,
}: GetBaseURLParams) => {
  const path = additionalPath ? `${endpoint}/${additionalPath}` : endpoint;
  return new URL(path, BASE_URL);
};
