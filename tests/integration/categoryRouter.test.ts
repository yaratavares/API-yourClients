import supertest from "supertest"
import app from "../../src/app"
import { client } from "../../src/database"

afterAll(() => 
    client.close()
);

describe("List all categories - GET /categories", () => {
    it("Should answer with all categories", async () => {
        const result = await supertest(app).get("/categories");
        expect(result.status).toEqual(200);
        expect(result.body).toBeTruthy();
    });
})