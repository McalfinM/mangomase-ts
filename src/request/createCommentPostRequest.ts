class CreateCommentPostRequest {
    protected _user_uuid: string;
    protected _comment: string;
    protected _post_uuid: string;

    constructor(body: {
        user_uuid: string
        comment: string
        post_uuid: string
    }) {
        this._user_uuid = body.user_uuid;
        this._comment = body.comment;
        this._post_uuid = body.post_uuid;
    }

    get user_uuid(): string | null {
        return this._user_uuid
    }

    get post_uuid(): string | null {
        return this._post_uuid
    }

    get comment(): string | null {
        return this._comment
    }

}

export default CreateCommentPostRequest