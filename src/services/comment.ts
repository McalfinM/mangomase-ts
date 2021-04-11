import CommentRepository from "../repositories/comment"
import CreateCommentPostRequest from "../request/createCommentPostRequest";
import UpdateCommentPostRequest from "../request/updateCommentPostRequest"
import { v4 as uuidv4 } from 'uuid'
import { BadRequest, NotFound } from "@tsed/exceptions";
import PostEntity from "../entities/post";
import PostService from '../services/post'

class CommentService {
    async create(request: CreateCommentPostRequest, user: { [k: string]: any }): Promise<PostEntity> {

        const searchPost = await PostService.findByUuid(request.post_uuid ?? '')
        const comments = await CommentRepository.create(new PostEntity({
            uuid: searchPost.getUuid,
            comment: [{
                uuid: uuidv4(),
                user_uuid: request.user_uuid,
                comment: request.comment,
                created_at: new Date,
                deleted_at: null
            }]
        }))
        return comments
    }

    async update(request: CreateCommentPostRequest, uuid: string, user: { [k: string]: any }): Promise<PostEntity> {

        const comments = await CommentRepository.update(new PostEntity({
            uuid: request.post_uuid,
            comment: [{
                user_uuid: request.user_uuid,
                comment: request.comment,
                updated_at: new Date()
            }]
        }), uuid, request.comment ?? '')

        return comments
    }
}

export default new CommentService();