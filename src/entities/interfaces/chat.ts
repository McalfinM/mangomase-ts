export interface IChatEntity {
    uuid: string | null;
    user_uuid: string | null;
    with_user_uuid: string | null;
    message: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
}