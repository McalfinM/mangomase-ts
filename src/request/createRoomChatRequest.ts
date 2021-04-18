class CreateRoomChatRequest {
    protected user_uuid: string | null;
    protected with_user_uuid: string | null;
    protected deleted_at: Date | null;
    protected created_at: Date | null;
    protected updated_at: Date | null;

    constructor(body: {
        user_uuid: string;
        with_user_uuid: string;
        deleted_at: Date;
        created_at: Date;
        updated_at: Date;
    }) {
        this.user_uuid = body.user_uuid;
        this.with_user_uuid = body.with_user_uuid;
        this.deleted_at = body.deleted_at;
        this.created_at = body.created_at;
        this.updated_at = body.updated_at;
    }

    get getuser_uuid(): string | null {
        return this.user_uuid
    }
    get getwith_user_uuid(): string | null {
        return this.with_user_uuid
    }
    get getdeleted_at(): Date | null {
        return this.deleted_at
    }
    get getcreated_at(): Date | null {
        return this.created_at
    }
    get getupdated_at(): Date | null {
        return this.updated_at
    }

}

export default CreateRoomChatRequest