import { model, Schema, Model } from "mongoose";
import { IClanCat } from './interfaces/clan_cat'

const ClanCatSchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
        deleted_at: { type: Date },
        created_at: { type: Date },
        updated_at: { type: Date }
    }
);

const ClanCat: Model<IClanCat> = model("clan_cat", ClanCatSchema);

export default ClanCat;
