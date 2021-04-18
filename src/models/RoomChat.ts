import { model, Schema, Model } from "mongoose";
import { IRoomChat } from './interfaces/roomChat'

const RoomChatSchema: Schema = new Schema(
    {
        uuid: { type: String },
        user_uuid: { type: String },
        with_user_uui: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date }
    }
);

const RoomChat: Model<IRoomChat> = model("room_chat", RoomChatSchema);

export default RoomChat;
