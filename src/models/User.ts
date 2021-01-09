import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
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
    }
)

const User = mongoose.model('User', UserSchema);

export default User