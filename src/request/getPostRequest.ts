class GetPostRequest {
    protected _uuid?: string
    protected _user_uuid?: string;
    protected _title?: string;
    protected _content?: string;
    protected _slug?: string;
    protected _age?: number
    protected _category?: string
    protected _clan_uuid?: string;
    protected _city?: string;
    protected _for_adoption?: boolean;
    protected _want_adoption?: boolean;
    protected _animal_type?: string;
    protected _sort_by?: any;
    protected _page?: number;
    protected _limit?: number;
    protected _search?: string;

    constructor(queryParams: {
        uuid?: string
        user_uuid?: string
        title?: string
        content?: string
        slug?: string
        age?: number
        clan_uuid?: string
        category?: string
        animal_type?: string
        for_adoption?: boolean
        city?: string
        want_adoption?: boolean
        sort_by?: any
        page?: number
        limit?: number
        search?: string
    }) {
        this._uuid = queryParams.uuid,
            this._user_uuid = queryParams.user_uuid;
        this._title = queryParams.title;
        this._content = queryParams.content;
        this._slug = queryParams.slug;
        this._age = queryParams.age;
        this._clan_uuid = queryParams.clan_uuid;
        this._category = queryParams.category;
        this._city = queryParams.city
        this._animal_type = queryParams.animal_type;
        this._for_adoption = queryParams.for_adoption;
        this._want_adoption = queryParams.want_adoption;
        this._sort_by = queryParams.sort_by,
            this._page = queryParams.page,
            this._limit = queryParams.limit,
            this._search = queryParams.search
    }

    get search(): string | undefined {
        return this._search
    }

    get user_uuid(): string | undefined {
        return this._user_uuid
    }

    get uuid(): string | undefined {
        return this._uuid
    }
    get title(): string | undefined {
        return this._title
    }
    get content(): string | undefined {
        return this._content
    }
    get slug(): string | undefined {
        return this._slug
    }
    get age(): number | undefined {
        return this._age
    }
    get city(): string | undefined {
        return this._city
    }
    get clan_uuid(): string | undefined {
        return this._clan_uuid
    }
    get category(): string | undefined {
        return this._category
    }
    get animal_type(): string | undefined {
        return this._animal_type
    }
    get for_adoption(): boolean | undefined {
        return this._for_adoption
    }
    get want_adoption(): boolean | undefined {
        return this._want_adoption
    }

    get sort(): string | undefined {
        return this._sort_by
    }

    get page(): number | undefined {
        return this._page
    }

    get limit(): number | undefined {
        return this._limit
    }
}

export default GetPostRequest;
