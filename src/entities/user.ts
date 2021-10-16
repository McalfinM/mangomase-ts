import BaseEntity from "./baseEntity";
import { IUserEntity } from './interfaces/user'
class UserEntity extends BaseEntity {
    protected _uuid: string
    protected _email: string
    protected _name: string
    protected _username: string
    protected _password: string
    protected _created_at: Date | null
    protected _updated_at: Date | null

    constructor(params: IUserEntity) {
        super();
        this._uuid = params.uuid
        this._email = params.email
        this._name = params.name
        this._username = params.username
        this._password = params.password
        this._created_at = params.created_at
        this._updated_at = params.updated_at
    }

    get uuid(): string {
        return this._uuid
    }

    set uuid(uuid: string) {
        this._uuid = uuid
    }


    get email(): string {
        return this._email
    }

    set email(email: string) {
        this._email = email
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get username(): string {
        return this._username
    }

    set username(username: string) {
        this._username = username
    }

    get password(): string {
        return this._password
    }

    set password(password: string) {
        this._password = password
    }


    get created_at(): Date | null {
        return this._created_at
    }

    set created_at(created_at: Date | null) {
        this._created_at = created_at
    }

    get updated_at(): Date | null {
        return this._updated_at
    }

    set updated_at(updated_at: Date | null) {
        this._updated_at = updated_at
    }

}

export default UserEntity;
