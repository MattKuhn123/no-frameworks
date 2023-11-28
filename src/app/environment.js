const isDev = process.env.NODE_ENV;

const dev = {
  api: "./assets/data.dev.json"
}

const prod = {
  api: "./assets/data.json"
}

export const environment = isDev ? dev : prod;