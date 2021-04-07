export interface IComment {
    id?: string | null;
    uuid?: string | null;
    user_uuid?: string | null;
    post_uuid?: string | null;
    comment?: string | null;
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
    image?: string | null;
    want_adoption?: boolean
    for_adoption?: boolean
    comment?: IComment[] | []
    deleted_at?: Date | null
    created_at?: Date | null;
    updated_at?: Date | null;
}
