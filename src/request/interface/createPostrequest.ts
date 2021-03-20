export interface IPostRequest {
    id?: string;
    uuid: string;
    user_uuid: string;
    title: string;
    content: string;
    slug: string;
    age: number
    clan: string
    category: string
    image: string
    created_at: Date
    updated_at: Date
}