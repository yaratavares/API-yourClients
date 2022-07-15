import { Request, Response } from "express";
import { ObjectId } from "mongodb";
import * as customerService from "../services/customerService.js"

async function getCustomers(req: Request, res: Response){
    const customers = await customerService.getCustomers();

    res.send(customers)
}

async function createCustomer(req: Request, res: Response){
    const {email, name, number, idCategory}: customerService.NewCustomer = req.body;
    const {street, zip, state, city}: customerService.NewAddress = req.body;

    await customerService.createCustomer({email, name, number, idCategory}, 
        {street, zip, state, city});

    res.sendStatus(201);
}

async function deleteCustomer(req: Request, res: Response){
    const id = String(req.params.id);

    if(!ObjectId.isValid(id)){
        return res.sendStatus(400);
    }

    await customerService.deleteCustomer(String(id));

    res.sendStatus(200)
}

async function updateCustomer(req: Request, res: Response) {
    const {email, name, number, idCategory}: customerService.NewCustomer = req.body;
    const {street, zip, state, city}: customerService.NewAddress = req.body;
    const id = String(req.params.id);

    if(!ObjectId.isValid(id) || !ObjectId.isValid(idCategory)){
        return res.sendStatus(400);
    }

    await customerService.updateCustomer(String(id), {email, name, number, idCategory}, 
        {street, zip, state, city});

    res.sendStatus(200)
}

export {getCustomers, createCustomer, deleteCustomer, updateCustomer}