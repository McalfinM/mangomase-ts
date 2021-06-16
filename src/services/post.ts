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
import ProvinceService from '../services/province'
import cloudinary from 'cloudinary'
import { cloud, cloudinaryConfig } from "../utils/cloudinary";

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
    async create(request: CreatePostRequest, user: { [k: string]: any }): Promise<PostEntity> {
        const searchUser = await UserService.findOneUser(user.uuid)
        const city = await CityService.findOne(searchUser?.city_uuid ?? '')
        const province = await ProvinceService.findOne(searchUser?.province_uuid ?? '')
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
            province_uuid: province.getUuid ?? '',
            user: null,
            city_uuid: city.getUuid ?? null,
            age: request.age ?? 0,
            image: request.image ?? 'https://res.cloudinary.com/werich1/image/upload/v1620365936/default_pet_fk1d0k.jpg',
            cloudinary_id: request.cloudinary_id,
            adoption: Boolean(request.adoption) ?? false,
            created_at: new Date,
            updated_at: null
        })
        const post = await PostRepository.create(postEntity)
        return post
    }

    async update(request: UpdatePostRequest, user: { [k: string]: any }, uuid: string): Promise<PostEntity> {
        const searchUser = await UserService.findOneUser(user.uuid)
        const searchPost = await PostRepository.findByUuid(uuid)
        if (!searchPost) throw new Error('Post Not Found')
        if (!searchUser) throw new Error('User Not Found')
        const city = await CityService.findOne(searchUser?.city_uuid ?? '')
        const province = await ProvinceService.findOne(searchUser?.province_uuid ?? '')
        const postEntity = new PostEntity({
            uuid: uuid,
            user_uuid: searchUser.uuid,
            title: request.title ?? '',
            content: request.content ?? '',
            slug: slugify(request.title + '-' + uuidv4()),
            clan_uuid: request.clan_uuid ?? '',
            province_uuid: province.getUuid ?? '',
            category: request.category ?? '',
            animal_type: request.animal_type ?? '',
            age: request.age ?? 0,
            user: null,
            cloudinary_id: request.cloudinary_id,
            city_uuid: city.getUuid ?? null,
            image: request.image,
            adoption: request.adoption ?? false,
            updated_at: new Date()
        })
        await cloud.uploader.destroy(searchPost.getCloudinaryId ?? '')
        const post = await PostRepository.update(postEntity);
        return postEntity
    }

    async findOne(uuid: string): Promise<PostQueryEntity> {
        const post = await PostRepository.findOne(uuid)
        if (!post) throw new BadRequest('Post Not Found find one')

        return post
    }

    async findOneForEdit(uuid: string, user: { [k: string]: any }): Promise<PostQueryEntity> {
        const post: PostQueryEntity | null = await PostRepository.findByUuid(uuid)
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
        if (!post) throw new ErrorNotFound('User not found', '@Post => Search by user uuid')
        return post
    }

    async updateManyCity(user_uuid: string, city_uuid: string): Promise<PostEntity[]> {
        const post = await PostRepository.updateManyCity(user_uuid, city_uuid)
        return post
    }
}

export default new PostService();