class UpdateCommentPostRequest {
    protected _comment: string;

    constructor(body: {
        comment: string
    }) {
        this._comment = body.comment;
    }

    get comment(): string | null {
        return this._comment
    }

}

export default UpdateCommentPostRequest