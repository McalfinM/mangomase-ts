
import BaseEntity from "./baseEntity";
import { IEmbed, IMenuEntity } from "./interfaces/menu";
import { IOrderEntity, IOrderMenuEntity } from "./interfaces/order";

class OrderEntity extends BaseEntity {

    protected _uuid: string
    protected _created_by: IEmbed
    protected _order_id: string
    protected _quantity: number
    protected _menus: IOrderMenuEntity[]
    protected _created_at: Date | null
    protected _updated_at: Date | null


    constructor(params: IOrderEntity) {
        super();
        this._uuid = params.uuid
        this._order_id = params.order_id
        this._created_by = params.created_by
        this._quantity = params.quantity
        this._menus = params.menus
        this._quantity = params.quantity
        this._created_at = params.created_at
        this._updated_at = params.updated_at
    }

    get uuid(): string {
        return this._uuid
    }
    set uuid(uuid: string) {
        this._uuid = uuid
    }
    get order_id(): string {
        return this._order_id
    }
    set order_id(order_id: string) {
        this._order_id = order_id
    }
    get created_by(): IEmbed {
        return this._created_by
    }
    set created_by(created_by: IEmbed) {
        this._created_by = created_by
    }
    get quantity(): number {
        return this._quantity
    }
    set quantity(quantity: number) {
        this._quantity = quantity
    }
    get menus(): IOrderMenuEntity[] {
        return this._menus
    }
    set menus(menus: IOrderMenuEntity[]) {
        this._menus = menus
    }

    get created_at(): Date | null {
        return this._created_at
    }
    set created_at(created_at: Date | null) {
        this._created_at = created_at
    }
    get updated_at(): Date | null {
        return this._updated_at
    }
    set updated_at(updated_at: Date | null) {
        this._updated_at = updated_at
    }


    toJson(): object {
        return {
            uuid: this.uuid,
            order_id: this.order_id,
            created_by: this.created_by,
            quantity: this.quantity,
            menus: this.menus,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            order_id: this.order_id,
            quantity: this.quantity,
            menus: this.menus,

        };
    }

}

export default OrderEntity;
