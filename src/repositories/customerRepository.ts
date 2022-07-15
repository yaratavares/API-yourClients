import { ObjectId } from "mongodb";
import collections from "../database.js";
import Customer from "../models/customerModel.js";

export function findCustomerById(idCustomer: number): Promise<Customer>{
    return collections.customers.findOne({_id: new ObjectId(idCustomer)}) as Promise<Customer>;
}

export function findCustomerByEmail(email: string): Promise<Customer>{
    return collections.customers.findOne({email}) as Promise<Customer>;
}

export function findCustomers() : Promise<Customer[]>{
    return collections.customers.find({}).toArray() as Promise<Customer[]>;
}

export function insertCustomer(customer : Customer): Promise<any> {
    return collections.customers.insertOne({...customer});
}

export function deleteCustomer(idCustomer: number): Promise<any>{
    return collections.customers.deleteOne({_id: new ObjectId(idCustomer)});
}

export function updateCustomer(idCustomer: number, customer: Customer): Promise<any>{
    return collections.customers.updateOne(
        {_id: new ObjectId(idCustomer)},
        { $set: {...customer}
    });
}