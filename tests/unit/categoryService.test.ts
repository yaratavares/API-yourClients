import { jest } from '@jest/globals';
import collections, { client } from '../../src/database.js';
import categoryRepository from '../../src/repositories/categoryRepository.js';
import * as categoryService from "../../src/services/categoryService.js"

beforeAll(() => {
    collections.customers.drop();
    collections.categories.drop();
})

afterAll(() => 
    client.close()
);

const notFoundError = {
    message: "Category not found",
    type: "not_found",
}

 describe("unit - test /categories", () => {
    it("Should throw error if category not find", async () => {
        jest.spyOn(categoryRepository, "findCategoryById").mockResolvedValue(null);
        expect( async () => {
            await categoryService.findCategoryById("12");
        }).rejects.toEqual(notFoundError)
    })
})