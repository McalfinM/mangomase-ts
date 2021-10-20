
import BaseEntity from "./baseEntity";
import { ICouponEntity } from "./interfaces/coupon";

class CouponEntity extends BaseEntity {
    protected _uuid: string
    protected _name: string
    protected _value: number
    protected _created_at: Date
    protected _updated_at: Date

    constructor(params: ICouponEntity) {
        super();
        this._uuid = params.uuid
        this._name = params.name
        this._value = params.value
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

    get value(): number {
        return this._value
    }

    set value(value: number) {
        this._value = value
    }

    get created_at(): Date {
        return this._created_at
    }

    set created_at(created_at: Date) {
        this._created_at = created_at
    }

    get updated_at(): Date {
        return this._updated_at
    }

    set updated_at(updated_at: Date) {
        this._updated_at = updated_at
    }


    toJson(): object {
        return {
            uuid: this._uuid,
            name: this._name,
        };
    }

    toListData(): {} {
        return {
            uuid: this._uuid,
            name: this._name,
            value: this._value
        };
    }

    toDetailData(): {} {
        return {
            uuid: this._uuid,
            name: this._name,
            value: this._value
        };
    }
}

export default CouponEntity;
