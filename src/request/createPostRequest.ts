export interface IComment {
    user_uuid: string;
    comment: string;
    post_uuid: string;
}

class CreatePostRequest {
    protected _user_uuid: string;
    protected _title: string;
    protected _content: string;
    protected _slug: string;
    protected _age: number
    protected _category: string
    protected _clan_uuid: string;
    protected _adoption: boolean;
    protected _comment?: IComment[] | []
    protected _animal_type: string;
    protected _image: string;

    constructor(body: {
        user_uuid: string
        title: string
        content: string
        slug: string
        age: number
        clan_uuid: string
        category: string
        animal_type: string
        adoption: boolean
        comment: []
        want_adoption: boolean
        image: string
    }) {
        this._user_uuid = body.user_uuid;
        this._title = body.title;
        this._content = body.content;
        this._slug = body.slug;
        this._age = body.age;
        this._category = body.category
        this._clan_uuid = body.clan_uuid;
        this._animal_type = body.animal_type;
        this._comment = body.comment
        this._adoption = body.adoption;
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

    get category(): string | null {
        return this._category
    }

    get slug(): string | null {
        return this._slug
    }
    get age(): number {
        return this._age
    }
    get clan_uuid(): string | null {
        return this._clan_uuid
    }
    get comment(): IComment[] | [] | undefined {
        return this._comment
    }
    get adoption(): boolean | null {
        return this._adoption
    }
    get animal_type(): string | null {
        return this._animal_type
    }
    get image(): string | null {
        return this._image
    }
}

export default CreatePostRequest