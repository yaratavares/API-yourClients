import { ObjectId, WithId, Document } from "mongodb";

interface Adress extends WithId<Document> {
    id?: ObjectId
    street: string
    city: string
    state: string
    zip: string
}

export default Adress