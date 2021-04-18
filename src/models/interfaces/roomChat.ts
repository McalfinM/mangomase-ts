import { Document } from 'mongoose'

export interface IRoomChat extends Document {
    uuid?: string | null;
    user_uuid?: string | null;
    with_user_uuid?: string | null;
    deleted_at?: Date | null;
    created_at?: Date | null;
    updated_at?: Date | null;
}