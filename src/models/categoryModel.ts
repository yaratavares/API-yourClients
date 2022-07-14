import { ObjectId, WithId, Document } from "mongodb";

interface Category extends WithId<Document> {
    id?: ObjectId
    name: string
}

export default Category