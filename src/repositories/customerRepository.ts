import { ObjectId } from "mongodb";
import collections from "../database.js";
import Customer from "../models/customerModel.js";

function findCustomerById(idCustomer: string): Promise<Customer>{
    return collections.customers.findOne({_id: new ObjectId(idCustomer)}) as Promise<Customer>;
}

function findCustomerByEmail(email: string): Promise<Customer>{
    return collections.customers.findOne({email}) as Promise<Customer>;
}

function findCustomers() : Promise<Customer[]>{
    return collections.customers.find({}).toArray() as Promise<Customer[]>;
}

function insertCustomer(customer : Customer): Promise<any> {
    return collections.customers.insertOne({...customer});
}

function deleteCustomer(idCustomer: string): Promise<any>{
    return collections.customers.deleteOne({_id: new ObjectId(idCustomer)});
}

function updateCustomer(customer: Customer): Promise<any>{
    return collections.customers.updateOne(
        {_id: new ObjectId(customer._id)},
        { $set: {...customer}
    });
}

const customerRepository = {findCustomerById, findCustomerByEmail, findCustomers, insertCustomer, deleteCustomer, updateCustomer}

export default customerRepository;