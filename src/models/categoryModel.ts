import { WithId, Document } from "mongodb";

interface Category extends WithId<Document> {
    name: string
}

export default Category