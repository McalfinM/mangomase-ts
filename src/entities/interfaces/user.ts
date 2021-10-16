export interface IUserEntity {
    uuid: string
    email: string
    name: string
    password: string
    image?: string
    username: string
    created_at: Date | null
    updated_at: Date | null
}
