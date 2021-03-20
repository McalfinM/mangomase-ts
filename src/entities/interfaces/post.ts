export interface IPostEntity {
    id?: string | null;
    uuid?: string | null;
    user_uuid?: string | null;
    title?: string | null;
    content?: string | null;
    slug?: string | null;
    age?: number | null;
    clan?: string | null;
    animal_type?: string | null;
    image?: string | null;
    want_adoption?: boolean | null;
    for_adoption?: boolean | null;
    deleted_at?: Date | null
    created_at?: Date | null;
    updated_at?: Date | null;
}
