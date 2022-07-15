import { ObjectId } from "mongodb"
import * as customerRepository from "../repositories/customerRepository.js"
import * as categoryRepository from "../repositories/categoryRepository.js"
import { conflict, notFound } from "../utils/errorUtils.js"

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


    if(categoryExist){
        throw notFound("Category not found");
    }

    await customerRepository.insertCustomer({
      _id: new ObjectId(), ...newCustomer,
      address: { _id: new ObjectId(),...newAdress}
    });
}