import { WithId, Document } from "mongodb";
import Address from "./addressModel.js";

interface Customer extends WithId<Document> {
    name: string,
    email: string,
    number: string,
    idCategory: number,
    address: Address
} 

export default Customer;