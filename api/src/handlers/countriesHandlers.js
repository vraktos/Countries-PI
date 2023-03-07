const {
  getCountriesController,
  postCountriesController,
  getCountryByQueryController,
  getCountryByIdController,
} = require("../controllers/countriesControllers");

const getCountryByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await getCountryByIdController(id);
    res.status(200).json(country);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountriesHandler = async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const countrie = await getCountryByQueryController(name);
      res.status(200).json(countrie);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    try {
      const countries = await getCountriesController();
      postCountriesController(countries);

      res.status(201).send("countries posted on db");
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = { getCountryByIdHandler, getCountriesHandler };
