import { model, Schema, Model } from "mongoose";
import { IPartner } from './interfaces/partner'

const PartnerSchema: Schema = new Schema(
    {
        uuid: { type: String },
        user_uuid: { type: String },
        name: { type: String },
        desription: { type: String },
        hours_close_open: { type: String },
        image: { type: String },
        category: { type: String },
        deleted_at: { type: Date },
        created_at: { type: Date },
        updated_at: { type: Date }
    }
);

const Partner: Model<IPartner> = model("partner", PartnerSchema);

export default Partner;
