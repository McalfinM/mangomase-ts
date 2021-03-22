class CreatePartnerRequest {
    protected _user_uuid: string
    protected _name: string
    protected _desription: string
    protected _hours_close_open: string
    protected _image: string
    protected _category: string
    protected _created_at: string
    protected _updated_at: string
    protected _deleted_at: string
    constructor(body: {
        user_uuid: string
        name: string
        desription: string
        hours_close_open: string
        image: string
        category: string
        created_at: string
        updated_at: string
        deleted_at: string
    }) {
        this._user_uuid = body.user_uuid;
        this._name = body.name
        this._desription = body.desription
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
    get desription(): string | null {
        return this._desription
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
    get created_at(): string | null {
        return this._created_at
    }
    get updated_at(): string | null {
        return this._updated_at
    }
    get deleted_at(): string | null {
        return this._deleted_at
    }

}

export default CreatePartnerRequest