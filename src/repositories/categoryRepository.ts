import { ObjectId } from "mongodb";
import collections from "../database.js";
import Category from "../models/categoryModel.js";

export function findCategoryById(categoryId: number): Promise<Category>{
    return collections.categories.findOne({_id: new ObjectId(categoryId)}) as Promise<Category>;
}

export function findCategories(): Promise<Category[]>{
    return collections.categories.find({}).toArray() as Promise<Category[]>;
}