import { Document } from 'mongoose'

export interface IRole extends Document {
    uuid?: string | null;
    name?: string | null;
}