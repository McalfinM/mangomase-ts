import PostEntity from '../entities/post';
import Post from '../models/Post'

class PostRepository {

    create = async (postEntity: PostEntity): Promise<PostEntity> => {

        const post: { [k: string]: any } = await Post.create({
            uuid: postEntity.getUuid,
            user_uuid: postEntity.getUserUuid,
            title: postEntity.getTitle,
            content: postEntity.getContent,
            slug: postEntity.getSlug,
            age: postEntity.getAge,
            clan: postEntity.getClanUuid,
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
                clan: postEntity.getClanUuid,
                animal_type: postEntity.getAnimalType,
                for_adoption: postEntity.getForAdoption,
                want_adoption: postEntity.getWantdoption,
                image: postEntity.getImage,
                updated_at: postEntity.getUpdatedAt ?? null,
            })
    }

    async findSlug(slug: string): Promise<PostEntity | null> {
        const postEntity = await Post.findOne({ slug: slug })
        return postEntity ? new PostEntity({
            uuid: postEntity?.uuid,
            user_uuid: postEntity?.user_uuid,
            title: postEntity?.title,
            content: postEntity?.content,
            slug: postEntity?.slug,
            clan_uuid: postEntity?.clan_uuid,
            animal_type: postEntity?.animal_type,
            age: postEntity?.age,
            image: postEntity?.image,
            for_adoption: postEntity?.for_adoption,
            want_adoption: postEntity?.want_adoption,
            created_at: postEntity?.created_at,
            updated_at: postEntity?.updated_at ?? null,
        }) : null
    }

    async findOne(uuid: string): Promise<PostEntity | null> {

        const postEntity = await Post.findOne(
            {
                uuid: uuid,
                $or: [{ deleted_at: null }, { deleted_at: undefined }],
            }
        )

        return postEntity ? new PostEntity({
            uuid: postEntity?.uuid,
            user_uuid: postEntity?.user_uuid,
            title: postEntity?.title,
            content: postEntity?.content,
            slug: postEntity?.slug,
            clan_uuid: postEntity?.clan_uuid,
            animal_type: postEntity?.animal_type,
            age: postEntity?.age,
            image: postEntity?.image,
            for_adoption: postEntity?.for_adoption,
            want_adoption: postEntity?.want_adoption,
            created_at: postEntity?.created_at,
            updated_at: postEntity?.updated_at ?? null,
        }) : null
    }

    async delete(uuid: string): Promise<object> {
        return await Post.updateOne({ uuid: uuid }, { $set: { deleted_at: new Date } })
    }

    async index(query: { [k: string]: any }): Promise<object> {

        const { page, limit, sort, ...rest } = query;

        // filter
        const queryVal: { [k: string]: any } = {}
        for (const key in rest) {
            if (Object.prototype.hasOwnProperty.call(rest, key)) {
                const element: any = rest[key];
                if (typeof element === 'object') {
                    for (const k in element) {
                        if (Object.prototype.hasOwnProperty.call(element, k)) {
                            queryVal[key] = { ['$' + k]: element[k] };
                        }
                    }
                }
                else {
                    queryVal[key] = new RegExp(rest[key], 'i');
                }
            }
        }

        // sort
        const sortVal: { [k: string]: any } = {}
        const sortArr = (sort as string)?.split(',');
        sortArr?.map(s => {
            const splitted = (s as string)?.split('.');
            sortVal[splitted[0]] = splitted[1].toUpperCase() == 'ASC' ? 1 : -1;
        })

        let options: object = {} as any;
        // paginate
        if (limit) {
            // @ts-ignore
            options.limit = +limit;
        }

        if (page && limit) {
            if (+page > 1) {
                // @ts-ignore
                options.skip = (page - 1) * +limit;
            }
        }

        // @ts-ignore
        options.sort = sortVal;

        return Post.find(

            { ...queryVal },
            { $or: [{ deleted_at: null }, { deleted_at: undefined }] },
            options,
        )
            .then(result => {
                return result.map(data => {
                    return new PostEntity({
                        id: data?._id,
                        uuid: data?.uuid ?? '',
                        user_uuid: data?.user_uuid ?? '',
                        title: data?.title ?? '',
                        content: data?.content ?? '',
                        slug: data?.slug ?? '',
                        age: data?.age ?? 0,
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

}

export default new PostRepository();