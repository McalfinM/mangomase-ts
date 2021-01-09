import mongoose from 'mongoose'

const RoleSchema = new mongoose.Schema(
    {
        uuid: {
            type: String
        },
        name: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Role = mongoose.model('Role', RoleSchema);

export default Role