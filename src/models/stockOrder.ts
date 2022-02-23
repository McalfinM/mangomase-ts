import { model, Schema, Model } from "mongoose";
import { IMenu } from "./interfaces/menu";
import { IPayment } from "./interfaces/payment";
import { IStockOrderModel } from "./interfaces/stockOrder";

const PaymentSchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
        amount: { type: Number },
        status: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date },
    }
);

PaymentSchema.index('uuid')

const StockOrderModel: Model<IStockOrderModel> = model(
    "stock_order",
    PaymentSchema
);

export default StockOrderModel;
