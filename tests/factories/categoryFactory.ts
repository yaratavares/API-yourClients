import { ObjectId } from "mongodb";
import Category from "../../src/models/categoryModel";

function categoryFactory (): Category{
    return {
        _id: new ObjectId(),
        name: "Vip"
    }
}

export {categoryFactory}