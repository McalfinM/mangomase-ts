export interface ICommentPostRequest {
    uuid: string;
    user_uuid: string;
    post_uuid: string;
    comment: string;
    created_at: Date;
    updated_at: Date;
}