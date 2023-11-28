const isDev = process.env.NODE_ENV;

const auth = {
  clientId: "01f486cb-fbe8-4e98-bb75-25ace962c163",
  authority: "https://login.microsoftonline.com/36fa657f-0d33-4275-850f-2039b97c165f",
}

const dev = {
  api: "./assets/data.dev.json",
  ... auth
}

const prod = {
  api: "./assets/data.json",
  ... auth
}

export const environment = isDev ? dev : prod;