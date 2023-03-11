const {
  postActivityController,
  getActivitiesController,
} = require("../controllers/activitiesController");

const getActivitiesHandler = async (req, res) => {
  try {
    const activities = await getActivitiesController();
    res.status(200).json(activities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postActivitieHandler = async (req, res) => {
  try {
    const { name, dificulty, duration, season, countries } = req.body;
    const newActivity = await postActivityController(
      name,
      dificulty,
      duration,
      season,
      countries
    );
    res.status(201).send(`You've created the activity: ${newActivity.name}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postActivitieHandler, getActivitiesHandler };
