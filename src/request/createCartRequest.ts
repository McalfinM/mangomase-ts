class CreateCartRequest {
    protected _menu_uuid: string;
    protected _uuid: string
    protected _name: string
    constructor(body: {
        menu_uuid: string
        uuid: string
        name: string
    }) {
        this._menu_uuid = body.menu_uuid;
        this._uuid = body.uuid
        this._name = body.name
    }

    get menu_uuid(): string {
        return this._menu_uuid
    }

    get uuid(): string {
        return this._uuid
    }
    get name(): string {
        return this._name
    }

}

export default CreateCartRequest