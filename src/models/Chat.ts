import { model, Schema, Model } from "mongoose";
import { IChat } from './interfaces/chat'

const ChatSchema: Schema = new Schema(
    {
        uuid: { type: String },
        user_uuid: { type: String },
        with_user_uuid: { type: String },
        message: { type: String },
        created_at: { type: Date },
        updated_at: { type: Date },
        deleted_at: { type: Date }
    }
);

const Chat: Model<IChat> = model("room_chat", ChatSchema);

export default Chat;
