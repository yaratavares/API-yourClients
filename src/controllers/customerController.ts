import { Request, Response } from "express";
import collections from "../database.js";
import Customer from "../models/customerModel.js";
import * as customerService from "../services/customerService.js"

async function getCustomers(req: Request, res: Response){
    const customers = (await collections.customers.find({}).toArray());

    res.send(customers)
}

async function createCustomer(req: Request, res: Response){
    const {email, name, number, idCategory}: customerService.NewCustomer = req.body;
    const {street, zip, state, city}: customerService.NewAddress = req.body;

    await customerService.createCustomer({email, name, number, idCategory}, 
        {street, zip, state, city});

    res.sendStatus(201);
}

async function deleteCustomers(req: Request, res: Response){
    await collections.customers.deleteMany({});

    res.sendStatus(200)
}

export {getCustomers, createCustomer, deleteCustomers}