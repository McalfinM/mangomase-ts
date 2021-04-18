import { model, Schema, Model } from "mongoose";
import { ICity } from './interfaces/city'

const CitySchema: Schema = new Schema(
    {
        uuid: { type: String },
        code: { type: String },
        province_code: { type: String },
        province_uuid: { type: String },
        name: { type: String }
    }
);

const City: Model<ICity> = model("cities", CitySchema);

export default City;
