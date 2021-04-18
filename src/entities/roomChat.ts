import BaseEntity from "./baseEntity";
import { IProvince } from './interfaces/province'
import { IRoomChatEntity } from "./interfaces/roomChat";

class RoomChatEntity extends BaseEntity implements IRoomChatEntity {
    protected _uuid: string | null
    protected _user_uuid: string | null
    protected _with_user_uuid: string | null
    protected _deleted_at: Date | null
    protected _created_at: Date | null
    protected _updated_at: Date | null

    constructor(params: IRoomChatEntity) {
        super();
        this._uuid = params.uuid
        this._user_uuid = params.user_uuid
        this._with_user_uuid = params.with_user_uuid
        this._deleted_at = params.deleted_at
        this._created_at = params.created_at
        this._updated_at = params.updated_at
    }

    get uuid(): string | null {
        return this._uuid
    }
    get user_uuid(): string | null {
        return this._user_uuid
    }
    get with_user_uuid(): string | null {
        return this._with_user_uuid
    }
    get deleted_at(): Date | null {
        return this._deleted_at
    }
    get created_at(): Date | null {
        return this._created_at
    }
    get updated_at(): Date | null {
        return this._updated_at
    }

    set uuid(uuid: string | null) {
        this._uuid = uuid
    }
    set user_uuid(user_uuid: string | null) {
        this._user_uuid = user_uuid
    }
    set with_user_uuid(with_user_uuid: string | null) {
        this._with_user_uuid = with_user_uuid
    }
    set deleted_at(deleted_at: Date | null) {
        this._deleted_at = deleted_at
    }
    set created_at(created_at: Date | null) {
        this._created_at = created_at
    }
    set updated_at(updated_at: Date | null) {
        this._updated_at = updated_at
    }


    toJson(): object {
        return {
            uuid: this._uuid,
            user_uuid: this._user_uuid,
            with_user_uuid: this._with_user_uuid,
            deleted_at: this._deleted_at,
            created_at: this._created_at,
            updated_at: this._updated_at,
        };
    }
}

export default RoomChatEntity;
