class CreateCategoryRequest {
    protected _name: string;


    constructor(body: {
        name: string

    }) {
        this._name = body.name;
    }

    get name(): string | null {
        return this._name
    }

}

export default CreateCategoryRequest