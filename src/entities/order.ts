
import BaseEntity from "./baseEntity";
import { OrderStatus } from "./enums/orderStatus";
import { IEmbed, IMenuEntity } from "./interfaces/menu";
import { IOrderEntity, IOrderMenuEntity } from "./interfaces/order";

class OrderEntity extends BaseEntity {

    protected _uuid: string
    protected _name: string
    protected _order_id: string
    protected _quantity: number
    protected _menus: IOrderMenuEntity[]
    protected _status: OrderStatus
    protected _created_at: Date | null
    protected _updated_at: Date | null


    constructor(params: IOrderEntity) {
        super();
        this._uuid = params.uuid
        this._name = params.name
        this._order_id = params.order_id
        this._quantity = params.quantity
        this._menus = params.menus
        this._status = params.status
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
    get name(): string {
        return this._name
    }
    set name(name: string) {
        this._name = name
    }
    get order_id(): string {
        return this._order_id
    }
    set order_id(order_id: string) {
        this._order_id = order_id
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

    get status(): OrderStatus {
        return this._status
    }
    set status(status: OrderStatus) {
        this._status = status
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
            name: this.name,
            order_id: this.order_id,
            quantity: this.quantity,
            menus: this.menus,
            status: this.status,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            name: this.name,
            order_id: this.order_id,
            quantity: this.quantity,
            menus: this.menus,
            status: this.status

        };
    }

    toDetailData(): {} {
        return {
            uuid: this.uuid,
            name: this.name,
            order_id: this.order_id,
            quantity: this.quantity,
            carts: this.menus,
            status: this.status

        };
    }

}

export default OrderEntity;
