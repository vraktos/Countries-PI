const axios = require("axios");

it("getCountryByIdHandler should give a response when a resquest is made", async () => {
  const countryId = await axios.get("http://localhost:3001/countries/9");
  expect(countryId.data).toBeDefined();
});

it("getCountriesHandler should give a response when a resquest is made", async () => {
  const countryQuery = await axios.get(
    "http://localhost:3001/countries?name='arg'"
  );
  expect(countryQuery.data).toBeDefined();
});
