import { Document } from 'mongoose'

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
    clan?: { [k: string]: any } | null
    for_adoption?: boolean | null
    want_adoption?: boolean | null
    image?: string | null
    comment?: IComment[] | []
    deleted_at?: Date | null | undefined
    created_at?: Date | null
    updated_at?: Date | null | undefined
}