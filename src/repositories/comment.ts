import CommentEntity from '../entities/comment';
import PostEntity from '../entities/post';
import Post from '../models/Post';
import Comment from '../models/Post';

class CommentRepository {

    async create(postEntitiy: PostEntity): Promise<PostEntity> {
        console.log(postEntitiy, 'ini console request')
        const post: { [k: string]: any } = await Post.updateOne({ uuid: postEntitiy.getUuid },
            {
                $push: {
                    comment: postEntitiy.getComment
                }

            }
        )
        return postEntitiy
    }

    async update(postEntity: PostEntity, uuid: string, comment: string): Promise<PostEntity> {
        const post = await Post.updateOne({ "comment.uuid": uuid, },
            {
                $set: {
                    "comment.$.comment": comment,
                    "comment.$.updated_at": new Date
                }
            }
        )

        return post
    }

    async delete(uuid: string): Promise<object> {
        const post = await Post.updateOne({ "comment.uuid": uuid },
            {
                $set: {
                    "comment.$.deleted_at": new Date
                }
            })

        return post
    }
}

export default new CommentRepository();