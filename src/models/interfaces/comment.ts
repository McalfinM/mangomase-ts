import { Document } from 'mongoose'

export interface IComment extends Document {
    uuid?: string | null;
    user_uuid?: string | null;
    post_uuid?: string | null;
    comment?: string | null;
    deleted_at?: Date | null;
    created_at?: Date | null;
    updated_at?: Date | null;
}