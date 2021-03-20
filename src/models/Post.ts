import { model, Schema, Model } from "mongoose";
import { IPost } from './interfaces/post'

const PostSchema: Schema = new Schema(
    {
        uuid: { type: String },
        user_uuid: { type: String },
        title: { type: String },
        content: { type: String },
        slug: { type: String },
        age: { type: Number },
        clan: { type: String },
        category: { type: String },
        image: { type: String },
        deleted_at: { type: Date },
        created_at: { type: Date },
        updated_at: { type: Date }
    }
);

const Post: Model<IPost> = model("post", PostSchema);

export default Post;
