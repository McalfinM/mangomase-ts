import mongoose from 'mongoose'

const AccessMenuSchema = new mongoose.Schema(
    {
        uuid:{
            type:String
        },
        user_uuid: {
            type: String,
            ref: 'User',
        },
        role_uuid:{
            type:String,
            ref:"roles"
        },
        access_BE:{
            type:String,
        },
        access_FE:{
            type:Array,
            default: null
        }
        
    },
    {
        timestamps: true
    }
)

const AccessMenu = mongoose.model('access_menu', AccessMenuSchema);

export default AccessMenu