
import BaseEntity from "./baseEntity";
import { PaymentMethod } from "./enums/paymentMethod";
import { IMenuEntity } from "./interfaces/menu";
import { IOrderMenuEntity } from "./interfaces/order";
import { IPaymentEntity } from "./interfaces/payment";

class PaymentEntity extends BaseEntity {
    protected _uuid: string
    protected _no_invoice: string
    protected _name: string
    protected _phone: string | null
    protected _email: string | null
    protected _notes: string | null
    protected _payment_method: PaymentMethod
    protected _quantity: number
    protected _menus: IOrderMenuEntity[]
    protected _total_price: number
    protected _discount: number
    protected _total_after_discount: number
    protected _created_at: Date | null
    protected _updated_at: Date | null

    constructor(params: IPaymentEntity) {
        super();
        this._uuid = params.uuid
        this._no_invoice = params.no_invoice
        this._name = params.name
        this._phone = params.phone
        this._email = params.email
        this._notes = params.notes
        this._payment_method = params.payment_method
        this._quantity = params.quantity
        this._menus = params.menus
        this._total_price = params.total_price
        this._discount = params.discount
        this._total_after_discount = params.total_after_discount
        this._created_at = params.created_at
        this._updated_at = params.updated_at
    }

    get uuid(): string {
        return this._uuid
    }

    set uuid(uuid: string) {
        this._uuid = uuid
    }
    get no_invoice(): string {
        return this._no_invoice
    }

    set no_invoice(no_invoice: string) {
        this._no_invoice = no_invoice
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }
    get phone(): string | null {
        return this._phone
    }

    set phone(phone: string | null) {
        this._phone = phone
    }
    get email(): string | null {
        return this._email
    }

    set email(email: string | null) {
        this._email = email
    }
    get notes(): string | null {
        return this._notes
    }

    set notes(notes: string | null) {
        this._notes = notes
    }
    get payment_method(): PaymentMethod {
        return this._payment_method
    }

    set payment_method(payment_method: PaymentMethod) {
        this._payment_method = payment_method
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
    get total_price(): number {
        return this._total_price
    }

    set total_price(total_price: number) {
        this._total_price = total_price
    }
    get discount(): number {
        return this._discount
    }

    set discount(discount: number) {
        this._discount = discount
    }
    get total_after_discount(): number {
        return this._total_after_discount
    }

    set total_after_discount(total_after_discount: number) {
        this._total_after_discount = total_after_discount
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
            no_invoice: this.no_invoice,
            phone: this.phone,
            email: this.email,
            notes: this.notes,
            payment_method: this.payment_method,
            quantity: this.quantity,
            menus: this.menus,
            total_price: this.total_price,
            discount: this.discount,
            total_after_discount: this.total_after_discount,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            no_invoice: this.no_invoice,
            quantity: this.quantity,
            total_price: this.total_price,
            name: this.name,
            created_at: this.created_at
        };
    }

    toDetailData(): {} {
        return {
            uuid: this.uuid,
            no_invoice: this.no_invoice,
            name: this.name,
            phone: this.phone,
            email: this.email,
            notes: this.notes,
            payment_method: this.payment_method,
            quantity: this.quantity,
            menus: this.menus,
            total_price: this.total_price,
            discount: this.discount,
            total_after_discount: this.total_after_discount,
            created_at: this.created_at
        };
    }
}

export default PaymentEntity;
