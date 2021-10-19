import { model, Schema, Model } from "mongoose";
import { IOrder } from "./interfaces/order";

const OrderSchema: Schema = new Schema(
    {
        uuid: { type: String },
        created_by: { type: Object },
        quantity: { type: Number },
        menus: { type: Array },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date },
    }
);

OrderSchema.index('uuid')

const OrderModel: Model<IOrder> = model(
    "orders",
    OrderSchema
);

export default OrderModel;
