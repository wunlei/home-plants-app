export function fetchWrapper(promise: Promise<Response>) {
  return promise.then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} ${response.statusText}`);
  });
}
