const app = require("../../app");
const request = require("supertest");
require("jest-fetch-mock").enableMocks();

describe("/animals", () => {
  test("response code is 200 when params name given", async () => {
    let response = await request(app).get("/animals?name=cheetah");
    expect(response.status).toEqual(200);
  });
});
