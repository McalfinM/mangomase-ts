import { Document } from 'mongoose'

export interface IClanCat extends Document {
    uuid?: string | null
    name?: string | null
    created_at?: Date | null
    updated_at?: Date | null
    deleted_at?: Date | null
}