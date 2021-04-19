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
        clan_uuid: { type: String },
        category: { type: String },
        animal_type: { type: String },
        city_uuid: { type: String },
        image: { type: String },
        comment: { type: Array },
        adoption: { type: Boolean },
        deleted_at: { type: Date },
        created_at: { type: Date },
        updated_at: { type: Date }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);


PostSchema.virtual('clan', {
    ref: 'clan_cat',
    localField: 'clan_uuid',
    foreignField: 'uuid',
    justOne: true,
});

PostSchema.virtual('user', {
    ref: 'User',
    localField: 'user_uuid',
    foreignField: 'uuid',
    justOne: true,
});

const Post: Model<IPost> = model("post", PostSchema);

export default Post;
