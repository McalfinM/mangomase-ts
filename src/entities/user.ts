import BaseEntity from "./baseEntity";
import { IUserEntity } from './interfaces/user'

class UserEntity extends BaseEntity {
    protected _id?: string | null
    protected _uuid: string
    protected _email: string
    protected _name: string
    protected _password?: string
    protected _is_verified: boolean
    protected _is_deleted: boolean
    protected _created_at: Date
    protected _deleted_at: Date

    constructor(params: IUserEntity) {
        super();
        this._uuid = params.uuid
        this._email = params.email
        this._name = params.name
        this._password = params.password
        this._is_verified = params.is_verified
        this._is_deleted = params.is_deleted
        this._created_at = params.created_at
        this._deleted_at = params.deleted_at
    }

    get uuid(): string {
        return this._uuid
    }


    get email(): string {
        return this._email
    }

    get name(): string {
        return this._name
    }

    get password(): string | undefined {
        return this._password
    }


    get is_verified(): boolean {
        return this._is_verified
    }


    get is_deleted(): boolean {
        return this._is_deleted
    }

    get created_at(): Date {
        return this._created_at
    }

    get deleted_at(): Date {
        return this._deleted_at
    }


}

export default UserEntity;
