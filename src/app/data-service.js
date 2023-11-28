import { environment } from "./environment"

export const getData = () => {
  return fetch(environment.api);
}
