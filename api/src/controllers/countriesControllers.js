const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesController = async () => {
  const rawData = (await axios.get("https://restcountries.com/v3/all")).data;

  const countries = rawData.map((countrie) => {
    //console.log(countrie.capital);
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
  getCountriesController,
  postCountriesController,
  getCountryByQueryController,
  getCountryByIdController,
};
