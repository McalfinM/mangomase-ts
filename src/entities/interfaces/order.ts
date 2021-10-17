import { IEmbed, IMenuEntity } from "./menu";

export interface IOrderEntity {
    uuid: string
    order_id: string
    created_by: IEmbed
    quantity: number
    menus: IOrderMenuEntity[]
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