const { Router } = require("express");
const {
  getCountryByIdHandler,
  getCountriesHandler,
} = require("../handlers/countriesHandlers");

const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);

countriesRouter.get("/:id", getCountryByIdHandler);

module.exports = countriesRouter;
