import { Document } from 'mongoose'

export interface ICity extends Document {
    uuid?: string;
    name?: string;
    code?: string;
    province_uuid?: string
    province_code?: string;
}