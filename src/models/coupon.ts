import { model, Schema, Model } from "mongoose";
import { ICoupon } from "./interfaces/coupon";

const CouponSchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
        value: { type: Number },
        created_at: { type: Date },
        updated_at: { type: Date },
    }
);

CouponSchema.index('uuid')
CouponSchema.index('name')

const CouponModel: Model<ICoupon> = model(
    "coupon",
    CouponSchema
);

export default CouponModel;
