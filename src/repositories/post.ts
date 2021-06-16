import PostEntity from '../entities/post';
import PostQueryEntity from '../entities/postQueries';
import ClanCat from '../models/ClanCat';
import Post from '../models/Post'
import specificationInterface from './specifications/specificationInterface';

class PostRepository {

    create = async (postEntity: PostEntity): Promise<PostEntity> => {
        const post: { [k: string]: any } = await Post.create({
            uuid: postEntity.getUuid,
            user_uuid: postEntity.getUserUuid,
            title: postEntity.getTitle,
            content: postEntity.getContent,
            slug: postEntity.getSlug,
            age: postEntity.getAge,
            category: postEntity.getCategory,
            city_uuid: postEntity.getCityUuid,
            province_uuid: postEntity.getProvinceUuid,
            clan_uuid: postEntity.getClanUuid,
            animal_type: postEntity.getAnimalType,
            cloudinary_id: postEntity.getCloudinaryId,
            adoption: postEntity.getForAdoption,
            image: postEntity.getImage,
            created_at: postEntity.getCreatedAt ?? new Date,
            updated_at: postEntity.getUpdatedAt ?? null,
            deleted_at: postEntity.getDeletedAt ?? null
        })

        postEntity.setId = post.id
        return postEntity
    }

    update = async (postEntity: PostEntity): Promise<PostEntity> => {
        return await Post.updateOne({ uuid: postEntity.getUuid },
            {
                user_uuid: postEntity.getUserUuid,
                title: postEntity.getTitle,
                content: postEntity.getContent,
                slug: postEntity.getSlug,
                age: postEntity.getAge,
                clan_uuid: postEntity.getClanUuid,
                animal_type: postEntity.getAnimalType,
                adoption: postEntity.getForAdoption,
                city_uuid: postEntity.getCityUuid,
                cloudinary_id: postEntity.getCloudinaryId,
                province_uuid: postEntity.getProvinceUuid,
                image: postEntity.getImage,
                updated_at: postEntity.getUpdatedAt ?? null,
            })
    }

    async findByUuid(uuid: string): Promise<PostQueryEntity | null> {
        const postEntity = await Post.findOne({ uuid: uuid })
        return postEntity ? new PostQueryEntity({
            uuid: postEntity.uuid ?? '',
            user_uuid: postEntity?.user_uuid,
            title: postEntity.title ?? '',
            content: postEntity.content ?? '',
            slug: postEntity.slug ?? '',
            clan_uuid: postEntity?.clan_uuid,
            animal_type: postEntity?.animal_type,
            user: postEntity.user ?? null,
            province_uuid: postEntity.province_uuid ?? '',
            category: postEntity.category ?? '',
            comment: postEntity.comment ?? [],
            city_uuid: postEntity.city_uuid ?? null,
            age: postEntity?.age,
            cloudinary_id: postEntity.cloudinary_id,
            image: postEntity?.image,
            adoption: postEntity.adoption ?? false,
            created_at: postEntity?.created_at,
            updated_at: postEntity?.updated_at ?? null,
        }) : null
    }

    async findOne(uuid: string): Promise<PostQueryEntity | null> {

        const postEntity = await Post.findOne(
            {
                slug: uuid,
                $or: [{ deleted_at: null }, { deleted_at: undefined }],
            }
        ).populate('clan')
            .populate({ path: 'user', select: ['name', 'province_uuid', 'city_uuid', 'image'], populate: [{ path: 'province' }, { path: 'city' }] })

        return postEntity ? new PostQueryEntity({
            uuid: postEntity.uuid ?? '',
            user_uuid: postEntity?.user_uuid,
            title: postEntity.title ?? '',
            content: postEntity.content ?? '',
            slug: postEntity.slug ?? '',
            province_uuid: postEntity.province_uuid ?? '',
            clan_uuid: postEntity?.clan_uuid,
            clan: postEntity?.clan ?? null,
            animal_type: postEntity?.animal_type,
            category: postEntity.category ?? '',
            age: postEntity?.age,
            comment: postEntity.comment ?? [],
            city_uuid: postEntity.city_uuid ?? null,
            user: postEntity.user ?? null,
            image: postEntity?.image,
            adoption: postEntity.adoption ?? false,
            created_at: postEntity?.created_at,
            updated_at: postEntity?.updated_at ?? null,
        }) : null
    }

    async delete(uuid: string): Promise<object> {
        return await Post.updateOne({ uuid: uuid }, { deleted_at: new Date() })
    }

    async findByUserLogin(user: { [k: string]: any }): Promise<PostEntity[]> {
        return await Post.find(
            { user_uuid: user.uuid, deleted_at: null },
        )
            .then(result => {
                return result.map(data => {
                    return new PostEntity({
                        uuid: data?.uuid ?? '',
                        user_uuid: data?.user_uuid ?? '',
                        title: data?.title ?? '',
                        content: data?.content ?? '',
                        slug: data?.slug ?? '',
                        age: data?.age ?? 0,
                        category: data.category ?? '',
                        clan_uuid: data?.clan_uuid ?? '',
                        animal_type: data?.animal_type ?? '',
                        adoption: data?.adoption ?? false,
                        user: data.user ?? null,
                        province_uuid: data.province_uuid ?? '',
                        image: data?.image ?? 'animal.jpg',
                        city_uuid: data.city_uuid ?? null,
                        comment: data?.comment ?? [],
                        created_at: data?.created_at ?? new Date,
                        updated_at: data?.updated_at ?? new Date,
                        deleted_at: data?.deleted_at ?? null
                    });
                })
            })
            .catch(err => {
                return err;
            })


    }

    async updateManyCity(uuid: string, city_uuid: string): Promise<PostEntity[]> {
        const post = await Post.updateMany({ user_uuid: uuid }, {
            city_uuid: city_uuid
        })
        return post
    }
    async index(
        specification: specificationInterface
    ): Promise<{
        total: number;
        data: PostQueryEntity[];
    }> {
        const total_customer = await Post.find({
            ...specification.specifies(),
        }).countDocuments()
        return Post.find(
            {
                ...specification.specifies(),
            },
            {},
            {
                ...specification.paginate(),
                sort: specification.specSort(),
            }
        ).populate('clan')
            .populate({ path: 'user', select: ['name', 'province_uuid', 'city_uuid'], populate: [{ path: 'province' }, { path: 'city' }] })
            .then((result) => {
                return {
                    total: total_customer,
                    data: result.map((data) => {
                        return new PostQueryEntity({
                            uuid: data.uuid ?? '',
                            user_uuid: data?.user_uuid ?? '',
                            title: data?.title ?? '',
                            content: data?.content ?? '',
                            slug: data?.slug ?? '',
                            age: data?.age ?? 0,
                            clan_uuid: data?.clan_uuid ?? '',
                            clan: data?.clan ?? null,
                            animal_type: data?.animal_type ?? '',
                            category: data.category ?? '',
                            province_uuid: data.province_uuid ?? '',
                            adoption: data?.adoption ?? false,
                            user: data?.user ?? null,
                            city_uuid: data.city_uuid ?? null,
                            image: data?.image ?? 'animal.jpg',
                            comment: data?.comment ?? [],
                            created_at: data?.created_at ?? new Date,
                            updated_at: data?.updated_at ?? new Date,
                            deleted_at: data?.deleted_at ?? null
                        });
                    }),
                };
            })
            .catch((err) => {
                return err;
            });
    }


}

export default new PostRepository();