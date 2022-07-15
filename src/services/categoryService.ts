import * as categoryRepository from "../repositories/categoryRepository.js"
import { notFound } from "../utils/errorUtils.js";

export async function findCategoryById(idCategory: string){
    const categoryExist = await categoryRepository.findCategoryById(idCategory)

    if(!categoryExist){
        throw notFound("Category not found");
    }
}