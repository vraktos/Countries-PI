const {
  postActivityController,
  getActivitiesController,
} = require("../controllers/activitiesController");

const getActivitiesHandler = async (req, res) => {
  const activities = await getActivitiesController();

  res.status(200).json(activities);
};

const postActivitieHandler = async (req, res) => {
  const { name, dificulty, duration, season, countries } = req.body;
  const newActivity = await postActivityController(
    name,
    dificulty,
    duration,
    season,
    countries
  );
  res.status(201).json(newActivity);
};

module.exports = { postActivitieHandler, getActivitiesHandler };
