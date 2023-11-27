const dev = {
  api: "./assets/data.dev.json"
}

const prod = {
  api: "./assets/data.json"
}

// TODO : How to set environment?
const isDev = true;
export const environment = isDev ? dev : prod;