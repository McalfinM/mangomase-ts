class CreateCartRequest {
    protected _menu_uuid: string;
    protected _uuid: string
    constructor(body: {
        menu_uuid: string
        uuid: string
    }) {
        this._menu_uuid = body.menu_uuid;
        this._uuid = body.uuid
    }

    get menu_uuid(): string {
        return this._menu_uuid
    }

    get uuid(): string {
        return this._uuid
    }

}

export default CreateCartRequest