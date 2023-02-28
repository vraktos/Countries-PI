const axios = require("axios");

it("activities.get route should be declared", async () => {
  const serverRes = await axios.get("http://localhost:3001/activities");
  //console.log(serverRes);
  expect(serverRes.status).toBe(200);
});

it("activities.post route should be declared", async () => {
  const serverRes = await axios.post("http://localhost:3001/activities");
  expect(serverRes.status).toBe(201);
});
