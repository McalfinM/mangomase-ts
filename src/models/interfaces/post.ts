import { Document } from 'mongoose'

export interface IPost extends Document {
    uuid?: string | null;
    user_uuid?: string | null;
    title?: string | null;
    content?: string | null;
    slug?: string | null;
    age?: number | null
    clan?: string | null
    animal_type?: string | null
    for_adoption?: boolean | null
    want_adoption?: boolean | null
    image?: string | null
    deleted_aat?: string | null | undefined
    created_at?: Date | null
    updated_at?: Date | null | undefined
}