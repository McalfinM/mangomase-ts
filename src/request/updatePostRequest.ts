class UpdatePostRequest {
    protected _user_uuid: string;
    protected _title: string;
    protected _content: string;
    protected _slug: string;
    protected _age: number
    protected _clan: string;
    protected _for_adoption: boolean;
    protected _want_adoption: boolean;
    protected _animal_type: string;
    protected _image: string;

    constructor(body: {
        user_uuid: string
        title: string
        content: string
        slug: string
        age: number
        clan: string
        animal_type: string
        for_adoption: boolean
        want_adoption: boolean
        image: string
    }) {
        this._user_uuid = body.user_uuid;
        this._title = body.title;
        this._content = body.content;
        this._slug = body.slug;
        this._age = body.age;
        this._clan = body.clan;
        this._animal_type = body.animal_type;
        this._for_adoption = body.for_adoption;
        this._want_adoption = body.want_adoption;
        this._image = body.image;
    }

    get user_uuid(): string | null {
        return this._user_uuid
    }
    get title(): string | null {
        return this._title
    }
    get content(): string | null {
        return this._content
    }
    get slug(): string | null {
        return this._slug
    }
    get age(): number {
        return this._age
    }
    get clan(): string | null {
        return this._clan
    }
    get for_adoption(): boolean | null {
        return this._for_adoption
    }
    get want_adoption(): boolean | null {
        return this._want_adoption
    }
    get animal_type(): string | null {
        return this._animal_type
    }
    get image(): string | null {
        return this._image
    }
}

export default UpdatePostRequest