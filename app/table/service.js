import { environment } from "/environments/environment.js"

export function getData() {
  return fetch(environment.api);
}
