import { model, Schema, Model } from "mongoose";
import { IProvince } from './interfaces/province'

const ProvinceSchema: Schema = new Schema(
    {
        uuid: { type: String },
        code: { type: String },
        name: { type: String }
    }
);

const Province: Model<IProvince> = model("province", ProvinceSchema);

export default Province;
