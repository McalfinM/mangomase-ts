
import BaseEntity from "./baseEntity";
import { IEmbed, IMenuEntity } from "./interfaces/menu";
import { IOrderEntity } from "./interfaces/order";

class OrderEntity extends BaseEntity {

    protected _uuid: string
    protected _created_by: IEmbed
    protected _quantity: number
    protected _menus: IMenuEntity[]
    protected _created_at: Date | null
    protected _updated_at: Date | null
    protected _deleted_at: Date | null


    constructor(params: IOrderEntity) {
        super();
        this._uuid = params.uuid
        this._created_by = params.created_by
        this._quantity = params.quantity
        this._menus = params.menus
        this._created_at = params.created_at
        this._updated_at = params.updated_at
        this._deleted_at = params.deleted_at
    }

    get uuid(): string {
        return this._uuid
    }
    set uuid(uuid: string) {
        this._uuid = uuid
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
    get menus(): IMenuEntity[] {
        return this._menus
    }
    set menus(menus: IMenuEntity[]) {
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
    get deleted_at(): Date | null {
        return this._deleted_at
    }
    set deleted_at(deleted_at: Date | null) {
        this._deleted_at = deleted_at
    }


    toJson(): object {
        return {
            uuid: this.uuid,
            created_by: this.created_by,
            quantity: this.quantity,
            menus: this.menus,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            quantity: this.quantity,
            menus: this.menus,

        };
    }

}

export default OrderEntity;
