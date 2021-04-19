import UserEntity from "../user";
import { IUserEntity } from "./user";

export interface IUserComment {
    uuid: string
    name: string
    image: string
}
export interface IComment {
    id?: string | null;
    uuid?: string | null;
    user_uuid?: string | null;
    post_uuid?: string | null;
    comment?: string | null;
    user?: IUserComment | {}
    deleted_at?: Date | null;
    created_at?: Date | null;
    updated_at?: Date | null;
}

export interface IPostEntity {
    id?: string | null;
    uuid: string;
    user_uuid?: string | null;
    title?: string
    content?: string
    slug?: string
    age?: number | null;
    category?: string;
    clan_uuid?: string | null;
    clan?: { [k: string]: any } | null
    animal_type?: string | null;
    city_uuid?: string | null
    image?: string | null;
    adoption?: boolean
    comment?: IComment[] | []
    user: UserEntity | null
    deleted_at?: Date | null
    created_at?: Date | null;
    updated_at?: Date | null;
}
