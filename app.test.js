const request = require("supertest");
const app = require("./app");

describe("Todos API", () => {
  it("GET /todos --> array todos", () => {});
  it("GET /todos/id --> specific toto by ID", () => {});
  it("GET /todos/id --> 404 if not found", () => {});
  it("POST /todos --> created todo", () => {});
  it("GET /todos --> validates request body", () => {});
});
