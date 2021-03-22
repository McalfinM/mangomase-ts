import { Document } from 'mongoose'

export interface IPartner extends Document {
    uuid?: string | null
    user_uuid?: string | null
    name?: string | null
    desription?: string | null
    hours_close_open?: string | null
    image?: string | null
    category?: string | null
    created_at?: Date | null
    updated_at?: Date | null
    deleted_at?: Date | null
}