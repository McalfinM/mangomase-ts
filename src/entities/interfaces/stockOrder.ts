import { OrderStatus } from "../enums/orderStatus";
import { PaymentMethod } from "../enums/paymentMethod";
import { IMenuEntity } from "./menu";
import { IOrderMenuEntity } from "./order";

export interface IStockOrderEntity {
    uuid: string
    name: string
    amount: number
    status: OrderStatus
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
}