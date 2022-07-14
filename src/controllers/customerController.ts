import { Request, Response } from "express";
import collections from "../database.js";
import Customer from "../models/customerModel.js";

async function getCustomers(req: Request, res: Response){
    const customers = (await collections.customers.find({}).toArray());

    res.send(customers)
}

async function createCustomer(req: Request, res: Response){
    const customer: Customer = req.body;
    console.log(customer)
    try {

        await collections.customers.insertOne(customer);
        res.sendStatus(201)
    } catch(err){
        console.log(err)
    }
}

async function deleteCustomers(req: Request, res: Response){
    await collections.customers.deleteMany({});

    res.sendStatus(200)
}

export {getCustomers, createCustomer, deleteCustomers}