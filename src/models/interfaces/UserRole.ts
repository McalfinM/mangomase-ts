import { Document } from 'mongoose'

export interface IUserRole extends Document {
    uuid?: string | null;
    user_uuid?: string | null;
    role_uuid?: string | null;
}