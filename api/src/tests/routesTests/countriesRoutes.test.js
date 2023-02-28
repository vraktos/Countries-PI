const axios = require("axios");

it("countries.get route should be declared", async () => {
  const serverRes = await axios.get("http://localhost:3001/countries");
  expect(serverRes.status).toBe(200);
});

it("countries.get/:id should be declared ", async () => {
  const id = 8;
  const serverRes = await axios.get(`http://localhost:3001/countries/${id}`);
  expect(serverRes.status).toBe(200);
});
