import { model, Schema, Model } from "mongoose";
import { IProvince } from './interfaces/province'

const CommentSchema: Schema = new Schema(
    {
        uuid: { type: String },
        code: { type: String },
        name: { type: String }
    }
);

const Province: Model<IProvince> = model("province", CommentSchema);

export default Province;
