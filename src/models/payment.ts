import { model, Schema, Model } from "mongoose";
import { IMenu } from "./interfaces/menu";
import { IPayment } from "./interfaces/payment";

const PaymentSchema: Schema = new Schema(
    {
        uuid: { type: String },
        no_invoice: { type: String },
        name: { type: String },
        phone: { type: String },
        email: { type: String },
        notes: { type: String },
        payment_method: { type: String },
        quantity: { type: Number },
        menus: { type: Array },
        total_price: { type: Number },
        discount: { type: Number },
        total_after_discount: { type: Number },
        created_at: { type: Date },
        updated_at: { type: Date },
    }
);

PaymentSchema.index('uuid')

const PaymentModel: Model<IPayment> = model(
    "payment",
    PaymentSchema
);

export default PaymentModel;
