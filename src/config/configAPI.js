const FortniteAPI = require("fortnite-api-com");
const config = {
  apikey: "362258957017939971",
  language: "fr",
  debug: true
};

const Fortnite = new FortniteAPI(config)

export const fortniteAr = [Fortnite];