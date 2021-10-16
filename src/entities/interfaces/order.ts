import { IEmbed, IMenuEntity } from "./menu";

export interface IOrderEntity {
    uuid: string
    created_by: IEmbed
    quantity: number
    menus: IMenuEntity[]
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
}