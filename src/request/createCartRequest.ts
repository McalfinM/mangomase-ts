
export interface ICartsRequest {
    menu_uuid: string
    quantity: number
}
class CreateCartRequest {
    protected _customer_name: string;
    protected _carts: ICartsRequest[]
    constructor(body: {
        customer_name: string
        carts: ICartsRequest[]
    }) {
        this._customer_name = body.customer_name
        this._carts = body.carts

    }

    get customer_name(): string {
        return this._customer_name
    }
    get carts(): ICartsRequest[] {
        return this._carts
    }

}

export default CreateCartRequest