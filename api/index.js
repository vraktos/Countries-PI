const app = require("./src/app");
const { sequelize } = require("./src/db");
const {
  getCountriesFromApi,
  postCountriesController,
} = require("./src/controllers/countriesControllers");

app.listen(3001, async () => {
  sequelize.sync({ force: true });
  const countries = await getCountriesFromApi();
  await postCountriesController(countries);
  console.log("server is up on port 3001");
});
