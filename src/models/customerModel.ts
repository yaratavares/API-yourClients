import { ObjectId, WithId, Document } from "mongodb";
import Adress from "./adressModel.js";
import Category from "./categoryModel.js";

interface Customer extends WithId<Document> {
    id?: ObjectId
    name: string,
    email: string,
    number: string,
    customerSince: Date,
    category: Category,
    adress: Adress
} 

export default Customer;