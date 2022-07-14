import collections from "../database.js";
import Customer from "../models/customerModel.js";

export function getCustomers() : Promise<Customer[]>{
    return collections.customers.find().toArray() as Promise<Customer[]>;
}