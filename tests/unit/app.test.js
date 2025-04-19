const request = require("supertest");
const app = require("../../src/app");

// Mock the database module
jest.mock("../../src/config/database", () => ({
  connectDB: jest.fn(),
  query: jest.fn(),
}));

describe("App endpoints", () => {
  test("GET / should return API info", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("endpoints");
  });

  test("GET /health should return ok status", async () => {
    const response = await request(app).get("/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status", "ok");
  });
});
