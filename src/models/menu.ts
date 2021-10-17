import { model, Schema, Model } from "mongoose";
import { IMenu } from "./interfaces/menu";

const MenuSchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
        slug: { type: String },
        description: { type: String },
        price: { type: Number },
        image: { type: String },
        cloudinary_id: { type: String },
        category: { type: Object },
        created_at: { type: Date },
        updated_at: { type: Date },
    }
);

MenuSchema.index('uuid')
MenuSchema.index('slug')
MenuSchema.index('name')

const MenuModel: Model<IMenu> = model(
    "menu",
    MenuSchema
);

export default MenuModel;
