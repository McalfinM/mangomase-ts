class CreatePartnerRequest {
    protected _user_uuid: string
    protected _name: string
    protected _description: string
    protected _hours_close_open: string
    protected _image: string
    protected _category: string
    protected _created_at: Date
    protected _updated_at: Date
    protected _deleted_at: Date
    constructor(body: {
        user_uuid: string
        name: string
        description: string
        hours_close_open: string
        image: string
        category: string
        created_at: Date
        updated_at: Date
        deleted_at: Date
    }) {
        this._user_uuid = body.user_uuid;
        this._name = body.name
        this._description = body.description
        this._hours_close_open = body.hours_close_open
        this._image = body.image
        this._category = body.category
        this._created_at = body.created_at
        this._updated_at = body.updated_at
        this._deleted_at = body.deleted_at
    }

    get user_uuid(): string | null {
        return this._user_uuid
    }

    get name(): string | null {
        return this._name
    }
    get description(): string | null {
        return this._description
    }
    get hours_close_open(): string | null {
        return this._hours_close_open
    }
    get image(): string | null {
        return this._image
    }
    get category(): string | null {
        return this._category
    }
    get created_at(): Date | null {
        return this._created_at
    }
    get updated_at(): Date | null {
        return this._updated_at
    }
    get deleted_at(): Date | null {
        return this._deleted_at
    }

}

export default CreatePartnerRequest