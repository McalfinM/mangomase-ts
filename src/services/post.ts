import PostEntity from "../entities/post";
import PostRepository from "../repositories/post"
import CreatePostRequest from "../request/createPostRequest";
import UpdatePostRequest from "../request/updatePostRequest"
import { v4 as uuidv4 } from 'uuid'
import slugify from 'slugify'
import { ErrorNotFound } from "../utils/errors";
import { BadRequest, Unauthorized } from "@tsed/exceptions";
import GetPostRequest from '../request/getPostRequest'
import GetPostSpecification from "../repositories/specifications/getPostSpecification";
import PostQueryEntity from "../entities/postQueries";
import UserService from '../services/user'
import CityService from '../services/city'

class PostService {

    async index(
        data: GetPostRequest
    ): Promise<{
        total: number;
        data: PostQueryEntity[];
    }> {
        return await PostRepository.index(
            new GetPostSpecification(data)
        );
    }
    async create(request: CreatePostRequest, user: { [k: string]: any }, image: any): Promise<PostEntity> {
        const searchUser = await UserService.findOneUser(user.uuid)
        const city = await CityService.findOne(searchUser?.city_uuid ?? '')
        if (searchUser?.province_uuid == '') {
            throw new BadRequest('Please update your province first in change profile')
        }
        const postEntity: PostEntity = new PostEntity({
            uuid: uuidv4(),
            user_uuid: user.uuid,
            title: request.title ?? '',
            content: request.content ?? '',
            slug: slugify(request.title + '-' + uuidv4()),
            clan_uuid: request.clan_uuid ?? '',
            category: request.category ?? '',
            animal_type: request.animal_type ?? '',
            user: null,
            city_uuid: city.getUuid ?? null,
            age: request.age ?? 0,
            image: image ?? 'images/posts/pet.jpg',
            adoption: request.adoption ?? false,
            created_at: new Date,
            updated_at: null
        })
        const post = await PostRepository.create(postEntity)
        return post
    }

    async update(request: UpdatePostRequest, user: { [k: string]: any }, uuid: string): Promise<PostEntity> {
        const city = await CityService.findOne(user.city_uuid ?? '')
        const postEntity: PostEntity = new PostEntity({
            uuid: uuid,
            user_uuid: '7gd74-5895-59gf-589njn54-5945j4nj',
            title: request.title ?? '',
            content: request.content ?? '',
            slug: slugify(request.title + '-' + uuidv4()),
            clan_uuid: request.clan_uuid ?? '',
            category: request.category ?? '',
            animal_type: request.animal_type ?? '',
            age: request.age ?? 0,
            user: null,
            city_uuid: city.getUuid ?? null,
            image: request.image ?? 'pet.jpg',
            adoption: request.adoption ?? false,
            updated_at: new Date
        })
        const post = await PostRepository.update(postEntity, user);
        return postEntity
    }

    async findOne(uuid: string): Promise<PostQueryEntity> {
        const post: PostQueryEntity | null = await PostRepository.findOne(uuid)
        if (!post) throw new BadRequest('Post Not Found find one')

        return post
    }

    async findOneForEdit(uuid: string, user: { [k: string]: any }): Promise<PostQueryEntity> {
        const post: PostQueryEntity | null = await PostRepository.findByUuid(uuid)
        console.log(post, 'ini hasil')
        if (!post) throw new BadRequest('Post Not Found')
        if (post.getUserUuid !== user.uuid) throw new Unauthorized('Unauthorized')

        return post
    }


    async findByUuid(uuid: string): Promise<PostQueryEntity> {
        const post: PostQueryEntity | null = await PostRepository.findByUuid(uuid)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }

    async delete(uuid: string): Promise<object> {
        const post = await PostRepository.delete(uuid)
        if (!post) throw new BadRequest('Post Not Found')
        return post
    }

    async findByUserLogin(user: { [k: string]: any }): Promise<PostEntity[]> {
        const post = await PostRepository.findByUserLogin(user)
        return post
    }
}

export default new PostService();