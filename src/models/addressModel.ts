import { WithId, Document } from "mongodb";

interface Address extends WithId<Document> {
    street: string
    city: string
    state: string
    zip: string
}

export default Address;