import { ObjectId } from "mongodb";
import supertest from "supertest"
import app from "../../src/app"
import collections, { client } from "../../src/database"
import {createCustomerFactory} from "../factories/customerFactory";

beforeAll(async () => {
    collections.categories.drop();
    collections.customers.drop();
    function seedDB(){
        return collections.categories.insertMany([{
            _id: new ObjectId("62d0a4e3fe6086a67b6e9281"),
            name: "VIP"
            },{
            _id: new ObjectId("62d0a509fe6086a67b6e9282"),
            name: "Regular"
        }
        ]);
    }
    await seedDB();
})

afterAll(() => 
    client.close()
);

describe("List all customers - GET /clients", () => {
    it("Should answer with all customers", async () => {
        const result = await supertest(app).get("/clients");
        expect(result.status).toEqual(200);
        expect(result.body).toBeTruthy();
    })
});

describe("Create one customer - POST /clients", () => {
    it("Should return 201 and customer exist in database", async () => {
        const customer = createCustomerFactory();
        const result = await supertest(app).post("/clients").send(customer);

        const response = await collections.customers.findOne({
            email: customer.email
        })
        expect(result.status).toEqual(201);
        expect(response.name).toBe(customer.name);
    })

    it("Should return 422 given a request without createCustomerSchema", async () => {
        const result = await supertest(app).post("/clients").send({name: 'Yara'});
        expect(result.status).toEqual(422)
    })
});

describe("Update one customer - PUT /clients/:id", () => {
    it("Should return 200 and customer exist in database", async () => {
        const customerCreate = createCustomerFactory();
        await supertest(app).post(`/clients`).send(customerCreate);

        const {_id} = await collections.customers.findOne({email: customerCreate.email})

        const customerUpdate = createCustomerFactory();
        const resultUpdate = await supertest(app).put(`/clients/${_id}`).send(customerUpdate);
        
        const customerResult = await collections.customers.findOne({email: customerUpdate.email})
        
        expect(resultUpdate.status).toEqual(200);
        expect(customerResult._id).toEqual(_id);
    });

    it("Should return 422 given a request without createCustomerSchema", async () => {
        const result = await supertest(app).put("/clients/1").send({name: 'Yara'});
        expect(result.status).toEqual(422)
    });
});

describe("Delete one customer - DELETE /clients/:id", () => {
    it("Should answer with status 200 and not exist in database", async () => {
        const customerCreate = createCustomerFactory();
        await supertest(app).post(`/clients`).send(customerCreate);

        const {_id} = await collections.customers.findOne({email: customerCreate.email})
        
        const resultDelete = await supertest(app).delete(`/clients/${_id}`);

        const customerResult = await collections.customers.findOne({email: customerCreate.email})
        
        expect(resultDelete.status).toEqual(200);
        expect(customerResult).toBeFalsy();
    })
})