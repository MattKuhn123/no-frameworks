import { environment } from "/environment.js"

export function getData() {
  return fetch(environment.api);
}
