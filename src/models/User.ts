import { Schema, Model, model } from 'mongoose'
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
        username: { type: String },
        password: { type: String },
        image: { type: String },

        created_at: { type: Date },
        updated_at: { type: Date },
    },

)

const UserModel: Model<IUser> = model('users', UserSchema);

export default UserModel