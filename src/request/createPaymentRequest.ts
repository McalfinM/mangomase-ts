class CreatePaymentRequest {
    protected _coupon_uuid: string | null;
    constructor(body: {
        coupon_uuid: string | null

    }) {
        this._coupon_uuid = body.coupon_uuid;
    }

    get coupon_uuid(): string | null {
        return this._coupon_uuid
    }

}

export default CreatePaymentRequest