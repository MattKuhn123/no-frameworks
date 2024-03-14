import { environment } from "./environment"

/** @type {{text: string, number: string}} */
let GetDataResult;

/**
 * 
 * @returns { Promise<GetDataResult[]> }
 */
export const getData = async () => {
  const data = await fetch(environment.api);
  return (await data.json()).data;
}
