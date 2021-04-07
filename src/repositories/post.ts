import PostEntity from '../entities/post';
import PostQueryEntity from '../entities/postQueries';
import ClanCat from '../models/ClanCat';
import Post from '../models/Post'
import specificationInterface from './specifications/specificationInterface';

class PostRepository {

    create = async (postEntity: PostEntity): Promise<PostEntity> => {
        console.log(postEntity, 'ini post entity')
        const post: { [k: string]: any } = await Post.create({
            uuid: postEntity.getUuid,
            user_uuid: postEntity.getUserUuid,
            title: postEntity.getTitle,
            content: postEntity.getContent,
            slug: postEntity.getSlug,
            age: postEntity.getAge,
            category: postEntity.getCategory,
            clan_uuid: postEntity.getClanUuid,
            animal_type: postEntity.getAnimalType,
            for_adoption: postEntity.getForAdoption,
            want_adoption: postEntity.getWantdoption,
            image: postEntity.getImage,
            created_at: postEntity.getCreatedAt ?? new Date,
            updated_at: postEntity.getUpdatedAt ?? null,
            deleted_at: postEntity.getDeletedAt ?? null
        })

        postEntity.setId = post.id
        return postEntity
    }

    update = async (postEntity: PostEntity, user: { [k: string]: any }): Promise<PostEntity> => {
        console.log(postEntity.getUuid, 'ini adalah post')
        return await Post.updateOne({ uuid: postEntity.getUuid },
            {
                user_uuid: postEntity.getUserUuid,
                title: postEntity.getTitle,
                content: postEntity.getContent,
                slug: postEntity.getSlug,
                age: postEntity.getAge,
                clan_uuid: postEntity.getClanUuid,
                animal_type: postEntity.getAnimalType,
                for_adoption: postEntity.getForAdoption,
                want_adoption: postEntity.getWantdoption,
                image: postEntity.getImage,
                updated_at: postEntity.getUpdatedAt ?? null,
            })
    }

    async findByUuid(uuid: string): Promise<PostEntity | null> {
        const postEntity = await Post.findOne({ uuid: uuid })
        return postEntity ? new PostEntity({
            uuid: postEntity.uuid ?? '',
            user_uuid: postEntity?.user_uuid,
            title: postEntity.title ?? '',
            content: postEntity.content ?? '',
            slug: postEntity.slug ?? '',
            clan_uuid: postEntity?.clan_uuid,
            animal_type: postEntity?.animal_type,
            category: postEntity.category ?? '',
            comment: postEntity.comment ?? [],
            age: postEntity?.age,
            image: postEntity?.image,
            for_adoption: postEntity.for_adoption ?? false,
            want_adoption: postEntity.want_adoption ?? false,
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
        ).populate({ path: 'clan', select: ['uuid', 'name'], model: ClanCat })

        return postEntity ? new PostQueryEntity({
            uuid: postEntity.uuid ?? '',
            user_uuid: postEntity?.user_uuid,
            title: postEntity.title ?? '',
            content: postEntity.content ?? '',
            slug: postEntity.slug ?? '',
            clan_uuid: postEntity?.clan_uuid,
            clan: postEntity?.clan ?? null,
            animal_type: postEntity?.animal_type,
            category: postEntity.category ?? '',
            age: postEntity?.age,
            comment: postEntity.comment ?? [],
            image: postEntity?.image,
            for_adoption: postEntity.for_adoption ?? false,
            want_adoption: postEntity.want_adoption ?? false,
            created_at: postEntity?.created_at,
            updated_at: postEntity?.updated_at ?? null,
        }) : null
    }

    async delete(uuid: string): Promise<object> {
        return await Post.updateOne({ uuid: uuid }, { $set: { deleted_at: new Date } })
    }

    async findByUserLogin(user: { [k: string]: any }): Promise<PostEntity[]> {

        return Post.find(
            { user_uuid: user.uuid },
            { $or: [{ deleted_at: null }, { deleted_at: undefined }] },
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
                        for_adoption: data?.for_adoption ?? false,
                        want_adoption: data?.want_adoption ?? false,
                        image: data?.image ?? 'animal.jpg',
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
        ).populate({ path: 'clan', select: ['uuid', 'name'], model: ClanCat })
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
                            for_adoption: data?.for_adoption ?? false,
                            want_adoption: data?.want_adoption ?? false,
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