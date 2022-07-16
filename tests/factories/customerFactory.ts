import { faker } from '@faker-js/faker';
import { ObjectId } from 'mongodb';
import Customer from '../../src/models/customerModel';
import { CreateCustomer } from "../../src/schemas/customerSchema"
import { NewAddress, NewCustomer } from '../../src/services/customerService';

function createCustomerFactory(): CreateCustomer{
    return {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        number: faker.phone.number(),
        idCategory: "62d0a4e3fe6086a67b6e9281",
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode()
    }
}

function customerFactory(): Customer{
    return  {
        _id: new ObjectId(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        number: faker.phone.number(),
        idCategory: "62d0a4e3fe6086a67b6e9281",
        address: {
            _id: new ObjectId(),
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zip: faker.address.zipCode()
        }
    }
}

function newCustomerFactory() : NewCustomer{
    return {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        number: faker.phone.number(),
        idCategory: "62d0a4e3fe6086a67b6e9281",
    }
}

function newAddressFactory(): NewAddress{
    return {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode()
    }
}

export {createCustomerFactory, customerFactory, newCustomerFactory, newAddressFactory};