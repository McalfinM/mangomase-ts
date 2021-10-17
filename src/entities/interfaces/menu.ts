export interface IEmbed {
    uuid?: string
    name?: string
    image?: string
}

export interface IMenuEntity {
    uuid: string
    name: string
    slug: string
    description: string
    price: number
    image: string
    cloudinary_id: string
    category: IEmbed
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
}