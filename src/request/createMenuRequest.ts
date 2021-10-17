class CreateMenuRequest {
    protected _name: string;
    protected _price: number;
    protected _image: string;
    protected _description: string
    protected _category_uuid: string
    constructor(body: {
        comment: string
        price: number
        image: string
        description: string
        category_uuid: string
    }) {
        this._name = body.comment;
        this._price = body.price;
        this._image = body.image
        this._description = body.description
        this._category_uuid = body.category_uuid
    }

    get name(): string {
        return this._name
    }
    get price(): number {
        return this._price
    }
    get image(): string {
        return this._image
    }
    get description(): string {
        return this._description
    }
    get category_uuid(): string {
        return this._category_uuid
    }

}

export default CreateMenuRequest