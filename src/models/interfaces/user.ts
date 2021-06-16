import { Document } from 'mongoose'

export interface IUser extends Document {
    uuid?: string
    email?: string
    name?: string | null
    password?: string
    image?: string
    province_uuid?: string
    city_uuid?: string
    cloudinary_id?: string
    is_verified?: boolean
    is_deleted?: boolean
    created_at?: Date
    deleted_at?: Date
}