
import BaseEntity from "./baseEntity";
import { OrderStatus } from "./enums/orderStatus";
import { ICouponEntity } from "./interfaces/coupon";
import { IStockOrderEntity } from "./interfaces/stockOrder";

class StockOrderEntity extends BaseEntity {
    public uuid: string
    public name: string
    public amount: number
    public status: OrderStatus
    public created_at: Date | null
    public updated_at: Date | null
    public deleted_at: Date | null

    constructor(params: IStockOrderEntity) {
        super();
        this.uuid = params.uuid
        this.name = params.name
        this.amount = params.amount
        this.status = params.status
        this.created_at = params.created_at
        this.updated_at = params.updated_at
        this.deleted_at = params.deleted_at

    }



    toJson(): object {
        return {
            uuid: this.uuid,
            name: this.name,
            amount: this.amount,
            status: this.status,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            name: this.name,
            amount: this.amount,
            status: this.status,
            created_at: this.created_at,
            updated_at: this.updated_at
        };
    }

    toDetailData(): {} {
        return {
            uuid: this.uuid,
            name: this.name,
            amount: this.amount,
            status: this.status,
            created_at: this.created_at,
            updated_at: this.updated_at,
            deleted_at: this.deleted_at,
        };
    }
}

export default StockOrderEntity;
