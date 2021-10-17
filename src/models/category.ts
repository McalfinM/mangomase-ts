import { model, Schema, Model } from "mongoose";
import { ICategory } from "./interfaces/category";

const CategorySchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
    }
);

CategorySchema.index('uuid')

const CategoryModel: Model<ICategory> = model(
    "categories",
    CategorySchema
);

export default CategoryModel;
