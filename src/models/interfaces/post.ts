import { Document } from 'mongoose'
import UserEntity from '../../entities/user';

export interface IComment {
    uuid: string | null
    user_uuid: string | null
    post_uuid: string | null
    comment: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
}
export interface IPost extends Document {
    uuid?: string | null;
    user_uuid?: string | null;
    title?: string | null;
    content?: string | null;
    slug?: string | null;
    age?: number | null
    category?: string | null;
    clan_uuid?: string | null
    animal_type?: string | null
    city_uuid?: string | null
    clan?: { [k: string]: any } | null
    adoption?: boolean | null
    user?: UserEntity | null
    image?: string | null
    comment?: IComment[] | []
    deleted_at?: Date | null | undefined
    created_at?: Date | null
    updated_at?: Date | null | undefined
}