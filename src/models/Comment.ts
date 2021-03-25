import { model, Schema, Model } from "mongoose";
import { IComment } from './interfaces/comment'

const CommentSchema: Schema = new Schema(
    {
        uuid: { type: String },
        user_uuid: { type: String },
        post_uuid: { type: String },
        comment: { type: String },
        deleted_at: { type: Date },
        created_at: { type: Date },
        updated_at: { type: Date }
    }
);

const Comment: Model<IComment> = model("comment", CommentSchema);

export default Comment;
