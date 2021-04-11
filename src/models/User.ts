import mongoose, { Schema, Model, model } from 'mongoose'
import { IUser } from './interfaces/user';


const UserSchema: Schema = new Schema(
    {
        uuid: {
            type: String
        },
        name: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        },
        is_deleted: {
            type: Boolean, default: false
        },
        is_verified: {
            type: Date, default: null
        }
    },
    {
        timestamps: true

    })

const User: Model<IUser> = model('User', UserSchema);

export default User