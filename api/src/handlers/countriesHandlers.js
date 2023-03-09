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
      const country = await getCountryByQueryController(name);
      res.status(200).json(country);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    try {
      const countries = await getCountriesController();
      res.status(201).json(countries);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = { getCountryByIdHandler, getCountriesHandler };
