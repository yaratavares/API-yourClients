import { ObjectId } from "mongodb";

interface Customer {
    id?: ObjectId
    name: string,
    email: string,
    number: string,
    category: string,
    customerSince: string
} 

export default Customer;