const { Activity } = require("../db");

const postActivityController = async (
  name,
  dificulty,
  duration,
  season,
  countries
) => {
  const newActivity = await Activity.create({
    name,
    dificulty,
    duration,
    season,
  });
  //const arrCountries = countries.split(",");
  newActivity.addCountry([...countries]);
  return newActivity;
};

const getActivitiesController = async () => {
  const rawActivities = await Activity.findAll();
  //console.log(rawActivities);
  const cleanAct = rawActivities.map((act) => {
    return act.dataValues;
  });
  console.log(cleanAct);
  return cleanAct;
};

module.exports = { postActivityController, getActivitiesController };
