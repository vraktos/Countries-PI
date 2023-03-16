const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesFromApi = async () => {
  const rawData = (await axios.get("https://restcountries.com/v3/all")).data;

  const countries = rawData.map((countrie) => {
    return {
      id: countrie.cca3,
      name: countrie.name.common,
      flagImg: countrie.flags[1],
      continent: countrie.continents[0],
      capital: countrie.capital?.[0],
      subregion: countrie.subregion || null,
      area: countrie.area,
      population: countrie.population,
    };
  });
  return countries;
};

const getCountriesController = async () => {
  const rawCountries = await Country.findAll();
  const countries = rawCountries.map((country) => {
    return country.dataValues;
  });
  return countries;
};

const postCountriesController = async (countries) => {
  await Country.bulkCreate(countries);
};

const getCountryByQueryController = async (name) => {
  return await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });
};

const getCountryByIdController = async (id) => {
  const country = Country.findByPk(id, {
    include: [
      {
        model: Activity,
        through: { attributes: ["ActivityId"] },
      },
    ],
  });
  return country;
};

module.exports = {
  getCountriesFromApi,
  getCountriesController,
  postCountriesController,
  getCountryByQueryController,
  getCountryByIdController,
};
