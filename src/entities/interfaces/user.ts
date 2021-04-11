export interface IUserEntity {
    id?: string | null;
    uuid: string
    email: string
    name: string
    password?: string
    is_verified: boolean
    is_deleted: boolean
    created_at: Date
    deleted_at: Date
}
