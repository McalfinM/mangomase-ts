import { model, Schema, Model } from "mongoose";
import { IRole } from './interfaces/Role'

const RoleSchema: Schema = new Schema(
    {
        uuid: { type: String },
        name: { type: String },
    }
);

const Role: Model<IRole> = model("room_chat", RoleSchema);

export default Role;
