import { model, Schema, Model } from "mongoose";
import { IOrder } from "./interfaces/order";

const OrderSchema: Schema = new Schema(
    {
        uuid: { type: String },
        created_by: { type: Object },
        quantity: { type: Number },
        name: { type: String },
        menus: { type: Array },
        status: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date },
    }
);

OrderSchema.index('uuid')
OrderSchema.index('menus.uuid')

const OrderModel: Model<IOrder> = model(
    "orders",
    OrderSchema
);

export default OrderModel;
