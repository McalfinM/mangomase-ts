import { Document } from 'mongoose'

export interface IChat extends Document {
    uuid?: string | null;
    user_uuid?: string | null;
    with_user_uuid?: string | null;
    room_chat_uuid?: string | null;
    message?: string | null;
    deleted_at?: Date | null;
    created_at?: Date | null;
    updated_at?: Date | null;
}