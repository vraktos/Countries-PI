const { Router } = require("express");
const {
  getActivitiesHandler,
  postActivitieHandler,
} = require("../handlers/activitiesHandlers.js");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);

activitiesRouter.post("/", postActivitieHandler);

module.exports = activitiesRouter;
