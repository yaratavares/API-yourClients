import { ObjectId } from "mongodb";
import collections from "../database.js";
import Category from "../models/categoryModel.js";

function findCategoryById(categoryId: string): Promise<Category>{
    return collections.categories.findOne({_id: new ObjectId(categoryId)}) as Promise<Category>;
}

function findCategories(): Promise<Category[]>{
    return collections.categories.find({}).toArray() as Promise<Category[]>;
}

const categoryRepository = {findCategoryById, findCategories};

export default categoryRepository;