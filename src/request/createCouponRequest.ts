class CreateCouponRequest {
    protected _name: string;
    protected _value: number


    constructor(body: {
        name: string
        value: number

    }) {
        this._name = body.name;
        this._value = body.value
    }

    get name(): string {
        return this._name
    }

    get value(): number {
        return this._value
    }

}

export default CreateCouponRequest