import { PaymentMethod } from "../enums/paymentMethod";
import { IMenuEntity } from "./menu";
import { IOrderMenuEntity } from "./order";

export interface IPaymentEntity {
    uuid: string
    name: string
    no_invoice: string
    phone: string | null
    email: string | null
    notes: string | null
    payment_method: PaymentMethod
    quantity: number
    menus: IOrderMenuEntity[]
    total_price: number
    discount: number
    total_after_discount: number
    created_at: Date | null
    updated_at: Date | null
}