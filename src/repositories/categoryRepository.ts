import { ObjectId } from "mongodb";
import collections from "../database.js";

export function findCategoryById(categoryId: number){
    return collections.categories.findOne({_id: new ObjectId(categoryId)});
}