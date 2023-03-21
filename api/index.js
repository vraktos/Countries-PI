const app = require("./src/app");
const { sequelize } = require("./src/db");
const {
  getCountriesFromApi,
  postCountriesController,
} = require("./src/controllers/countriesControllers");
require("dotenv").config();
const { PORT } = process.env;
app.listen(PORT, async () => {
  sequelize.sync({ force: true });
  const countries = await getCountriesFromApi();
  await postCountriesController(countries);
  console.log(`server is up on port ${PORT}`);
});
