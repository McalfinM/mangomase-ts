import BaseEntity from "./baseEntity";
import { ICommentEntity } from './interfaces/comment'

class CommentEntity extends BaseEntity {
    protected id?: string | null
    protected uuid?: string | null;
    protected user_uuid?: string | null;
    protected post_uuid?: string | null;
    protected comment?: string | null;
    protected deleted_at?: Date | null;
    protected created_at?: Date | null;
    protected updated_at?: Date | null;

    constructor(params: ICommentEntity) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.user_uuid = params.user_uuid;
        this.post_uuid = params.post_uuid;
        this.comment = params.comment;
        this.deleted_at = params.deleted_at;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
    }

    get getId(): string | null {
        return this?.id ?? null;
    }

    set setId(id: string) {
        this.id = id;
    }

    get getUuid(): string | null | undefined {
        return this.uuid;
    }

    set setUuid(uuid: string) {
        this.uuid = uuid;
    }

    get getUserUuid(): string | null | undefined {
        return this.user_uuid;
    }

    set setUserUuid(user_uuid: string) {
        this.user_uuid = user_uuid;
    }

    get getPostUuid(): string | null | undefined {
        return this.post_uuid
    }

    set setPostUuid(post_uuid: string) {
        this.post_uuid = post_uuid
    }

    get getComment(): string | null | undefined {
        return this.comment
    }

    set setComment(comment: string) {
        this.comment = comment
    }

    get getDeletedAt(): Date | null | undefined {
        return this.deleted_at;
    }

    set setDeletedAt(deleted_at: Date) {
        this.deleted_at = deleted_at;
    }

    get getCreatedAt(): Date | null | undefined {
        return this.created_at;
    }

    set setCreatedAt(created_at: Date) {
        this.created_at = created_at;
    }

    get getUpdatedAt(): Date | null | undefined {
        return this.updated_at;
    }

    set setUpdatedAt(updated_at: Date | null) {
        this.updated_at = updated_at;
    }

    toJson(): object {
        return {
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            post_uuid: this.post_uuid,
            comment: this.comment,
        };
    }
}

export default CommentEntity;
