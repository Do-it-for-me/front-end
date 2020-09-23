let SERVER_ENDPOINT = "http://localhost:3000/api";
if (process.env.NODE_ENV === "production") SERVER_ENDPOINT = "https://doit4.me";
const BROWSER_ENDPOINT = "http://localhost:3001/";
const CITIES_ENDPOINT =
  "https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.min.json";

export { SERVER_ENDPOINT, CITIES_ENDPOINT, BROWSER_ENDPOINT };
