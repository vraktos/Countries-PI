const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CountryModel = require("./models/CountryModel");
const ActivityModel = require("./models/ActivityModel");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`
);

CountryModel(sequelize);
ActivityModel(sequelize);

const { Country, Activity } = sequelize.models;

console.log(sequelize.models);

Country.belongsToMany(Activity, { through: "CountryActivities" });
Activity.belongsToMany(Country, { through: "CountryActivities" });

module.exports = { sequelize, Country, Activity };
