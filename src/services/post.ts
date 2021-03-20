import PostEntity from "../entities/post";
import PostRepository from "../repositories/post"
import CreatePostRequest from "../request/createPostRequest";
import UpdatePostRequest from "../request/updatePostRequest"
import { v4 as uuid } from 'uuid'
import slugify from 'slugify'
import { ErrorNotFound } from "../utils/errors";
import { BadRequest } from "@tsed/exceptions";

class PostService {

    getAll = async (query: { [k: string]: any }) => {
        const post = await PostRepository.index(query)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }
    async create(request: CreatePostRequest, user: { [k: string]: any }): Promise<PostEntity> {
        const postEntity: PostEntity = new PostEntity({
            uuid: uuid(),
            user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
            title: request.title ?? '',
            content: request.content ?? '',
            slug: slugify(request.title ?? ''),
            clan: request.clan ?? '',
            animal_type: request.animal_type ?? '',
            age: request.age ?? 0,
            image: request.image ?? 'pet.jpg',
            for_adoption: request.for_adoption ?? false,
            want_adoption: request.want_adoption ?? false,
            created_at: new Date,
            updated_at: null
        })
        const post = PostRepository.create(postEntity)
        return post
    }

    async update(request: UpdatePostRequest, user: { [k: string]: any }, uuid: string): Promise<PostEntity> {
        const postEntity: PostEntity = new PostEntity({
            uuid: uuid,
            user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
            title: request.title ?? '',
            content: request.content ?? '',
            slug: slugify(request.title ?? ''),
            clan: request.clan ?? '',
            animal_type: request.animal_type ?? '',
            age: request.age ?? 0,
            image: request.image ?? 'pet.jpg',
            for_adoption: request.for_adoption ?? false,
            want_adoption: request.want_adoption ?? false,
            updated_at: new Date
        })
        const post = await PostRepository.update(postEntity, user);
        return postEntity
    }

    async findOne(uuid: string): Promise<PostEntity> {
        const post: PostEntity | null | undefined = await PostRepository.findOne(uuid)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }

    async delete(uuid: string): Promise<object> {
        const post = await PostRepository.delete(uuid)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }
}

export default new PostService();