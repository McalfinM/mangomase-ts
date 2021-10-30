class GetPaymentRequest {
    protected _uuid?: string
    protected _name?: string
    protected _sort_by?: any;
    protected _page?: number;
    protected _limit?: number;
    protected _search?: string;

    constructor(queryParams: {
        uuid?: string
        name?: string
        sort_by?: any
        page?: number
        limit?: number
        search?: string
    }) {
        this._uuid = queryParams.uuid
        this._name = queryParams.name
        this._sort_by = queryParams.sort_by
        this._page = queryParams.page
        this._limit = queryParams.limit
        this._search = queryParams.search
    }

    get search(): string | undefined {
        return this._search
    }

    get uuid(): string | undefined {
        return this._uuid
    }

    get name(): string | undefined {
        return this._name
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

export default GetPaymentRequest;
