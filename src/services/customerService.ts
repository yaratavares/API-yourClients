import { ObjectId } from "mongodb"
import * as customerRepository from "../repositories/customerRepository.js"
import * as categoryRepository from "../repositories/categoryRepository.js"
import { conflict, notFound } from "../utils/errorUtils.js"
import Customer from "../models/customerModel.js"

export interface NewCustomer {
    name: string
    email: string
    number: string
    idCategory: number
}

export interface NewAddress{
    street: string
    city: string
    state: string
    zip: string
}

export async function createCustomer(newCustomer: NewCustomer, newAdress: NewAddress){
    const customerExist = await customerRepository.findCustomerByEmail(newCustomer.email);
        
    if(customerExist){
        throw conflict("Email already exists");
    }

    const categoryExist = await categoryRepository.findCategoryById(newCustomer.idCategory)
    console.log(categoryExist)
    if(!categoryExist){
        throw notFound("Category not found");
    }

    await customerRepository.insertCustomer({
      _id: new ObjectId(), ...newCustomer,
      address: { _id: new ObjectId(),...newAdress}
    });
}

export function getCustomers(): Promise<Customer[]>{
    return customerRepository.findCustomers();
}

export async function deleteCustomer(idCustomer: string){
    const customerExist = await customerRepository.findCustomerById(idCustomer);

    if (!customerExist){
        throw notFound("Customer not found")
    }

    await customerRepository.deleteCustomer(idCustomer);
}

export async function updateCustomer(idCustomer:string, customer: NewCustomer, address: NewAddress) {
    const customerExist = await customerRepository.findCustomerById(idCustomer);

    if (!customerExist){
        throw notFound("Customer not found")
    }

    const categoryExist = await categoryRepository.findCategoryById(customer.idCategory)

    if(!categoryExist){
        throw notFound("Category not found");
    }

    await customerRepository.updateCustomer({
        _id: new ObjectId(idCustomer), ...customer, 
        address: {...address, _id: new ObjectId()}})
}