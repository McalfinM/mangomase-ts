import { Document } from 'mongoose'

export interface IProvince extends Document {
    uuid?: string;
    name?: string;
    code?: string;
}