import request from "supertest";
import { expect } from "chai";
import createServer from "../src/server";

const app = createServer();

describe("Checking server", function () {
    it("Server is created without error", function (done) {
        request(app).get("/").expect(200).end(done);
    });
});
