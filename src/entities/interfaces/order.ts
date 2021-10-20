import { OrderStatus } from "../enums/orderStatus";
import { IEmbed, IMenuEntity } from "./menu";

export interface IOrderEntity {
    uuid: string
    name: string
    order_id: string
    quantity: number
    menus: IOrderMenuEntity[]
    status: OrderStatus
    created_at: Date | null
    updated_at: Date | null
}

export interface IOrderMenuEntity {
    uuid: string
    name: string
    price: number
    image: string
    quantity: number
    menu_uuid: string
}