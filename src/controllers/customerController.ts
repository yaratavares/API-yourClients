import { Request, Response } from "express";
import collections from "../database.js";
import Customer from "../models/customerModel.js";

async function getAllClients(req: Request, res: Response){
    const customers = (await collections.customers.find().toArray());
    console.log(customers);

    res.sendStatus(200)
}

async function createCustomer(req: Request, res: Response){
    const customer: Customer = req.body;
    console.log(customer)
    //await collections.customers.insertOne(customer);
}

export {getAllClients, createCustomer}