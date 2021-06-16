import CityEntity from "../cityEntity";
import ProvinceEntity from "../province";

export interface IUserEntity {
    uuid?: string
    email?: string
    name?: string | null
    password?: string
    image?: string | null
    province_uuid: string | null
    province?: ProvinceEntity | null | undefined
    city_uuid: string | null
    city?: CityEntity | null | undefined
    cloudinary_id?: string
    is_verified?: boolean
    is_deleted?: boolean
    created_at?: Date
    deleted_at?: Date
}
