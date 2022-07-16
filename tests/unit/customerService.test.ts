import { jest } from '@jest/globals';
import {customerFactory, newAddressFactory, newCustomerFactory} from "../factories/customerFactory"
import * as customerService from "../../src/services/customerService.js"
import customerRepository from '../../src/repositories/customerRepository';
import collections, { client } from '../../src/database.js';

beforeAll(() => {
    collections.customers.drop();
    collections.categories.drop();
})

afterAll(() => 
    client.close()
);

const conflictError = {
    message: "Email already exists",
    type: "conflict",
}

describe("unit - test /clients", () => {
    it("Should throw error if duplicate customer email", async () => {
        const customer = customerFactory()
        const newCustomer = newCustomerFactory();
        const newAdress = newAddressFactory()

        jest.spyOn(customerRepository, "findCustomerByEmail").mockResolvedValue(customer);

        expect( async () => {
            await customerService.createCustomer(newCustomer , newAdress);
        }).rejects.toEqual(conflictError)
    })
})