import BaseEntity from "./baseEntity";
import CityEntity from "./cityEntity";
import { IUserEntity } from './interfaces/user'
import ProvinceEntity from "./province";

class UserEntity extends BaseEntity {
    protected _uuid?: string
    protected _email?: string
    protected _name?: string | null
    protected _image?: string | null
    protected _province?: ProvinceEntity | null | undefined
    protected _province_uuid: string | null
    protected _city_uuid: string | null
    protected _city?: CityEntity | null | undefined
    protected _password?: string
    protected _is_verified?: boolean
    protected _is_deleted?: boolean
    protected _created_at?: Date
    protected _deleted_at?: Date

    constructor(params: IUserEntity) {
        super();
        this._uuid = params.uuid
        this._email = params.email
        this._name = params.name
        this._password = params.password
        this._image = params.image
        this._province_uuid = params.province_uuid
        this._province = params.province
        this._city_uuid = params.city_uuid
        this._city = params.city
        this._is_verified = params.is_verified
        this._is_deleted = params.is_deleted
        this._created_at = params.created_at
        this._deleted_at = params.deleted_at
    }

    get uuid(): string | undefined {
        return this._uuid
    }


    get email(): string | undefined {
        return this._email
    }

    get name(): string | null | undefined {
        return this._name
    }

    get password(): string | undefined {
        return this._password
    }

    get image(): string | null | undefined {
        return this._image
    }
    get province_uuid(): string | null {
        return this._province_uuid
    }
    get province(): ProvinceEntity | null | undefined {
        return this._province
    }
    get city_uuid(): string | null {
        return this._city_uuid
    }
    get city(): CityEntity | null | undefined {
        return this._city
    }
    get is_verified(): boolean | undefined {
        return this._is_verified
    }


    get is_deleted(): boolean | undefined {
        return this._is_deleted
    }

    get created_at(): Date | undefined {
        return this._created_at
    }

    get deleted_at(): Date | undefined {
        return this._deleted_at
    }


}

export default UserEntity;
