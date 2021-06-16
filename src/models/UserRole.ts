import { model, Schema, Model } from "mongoose";
import { IUserRole } from './interfaces/UserRole'

const UserRoleSchema: Schema = new Schema(
    {
        uuid: { type: String },
        user_uuid: { type: String },
        role_uuid: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date }
    }
);

const UserRole: Model<IUserRole> = model("room_chat", UserRoleSchema);

export default UserRole;
