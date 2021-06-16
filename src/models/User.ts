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
        image: { type: String },
        province_uuid: { type: String },
        city_uuid: { type: String },
        cloudinary_id: { type: String },
        is_deleted: {
            type: Boolean, default: false
        },
        is_verified: {
            type: Date, default: null
        },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date, default: null }
    },

    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }

)
UserSchema.virtual('province', {
    ref: 'province',
    localField: 'province_uuid',
    foreignField: 'uuid',
    justOne: true,
});

UserSchema.virtual('city', {
    ref: 'cities',
    localField: 'city_uuid',
    foreignField: 'uuid',
    justOne: true,
});

const User: Model<IUser> = model('User', UserSchema);

export default User