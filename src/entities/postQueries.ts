
import BaseEntity from "./baseEntity";
import { IPostEntity, IComment } from './interfaces/post'
import UserEntity from "./user";

class PostQueryEntity extends BaseEntity {
    protected id?: string | null
    protected uuid: string
    protected user_uuid?: string | null
    protected title?: string
    protected content?: string
    protected slug?: string
    protected age?: number | null
    protected clan_uuid?: string | null
    protected category?: string
    protected animal_type?: string | null
    protected adoption?: boolean
    protected want_adoption?: boolean
    protected city_uuid?: string | null
    protected province_uuid?: string | null
    protected image?: string | null
    protected cloudinary_id?: string
    protected clan?: { [k: string]: any } | null
    protected comment?: IComment[] | []
    protected user?: UserEntity | null
    protected deleted_at?: Date | null
    protected created_at?: Date | null
    protected updated_at?: Date | null


    constructor(params: IPostEntity) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.user_uuid = params.user_uuid;
        this.title = params.title;
        this.content = params.content;
        this.slug = params.slug;
        this.age = params.age;
        this.clan = params.clan;
        this.clan_uuid = params.clan_uuid;
        this.province_uuid = params.province_uuid
        this.city_uuid = params.city_uuid
        this.category = params.category;
        this.cloudinary_id = params.cloudinary_id
        this.animal_type = params.animal_type;
        this.adoption = params.adoption;
        this.user = params.user;
        this.image = params.image;
        this.comment = params.comment;
        this.deleted_at = params.deleted_at;
        this.created_at = params.created_at;
        this.updated_at = params.updated_at;
    }


    get getId(): string | null {
        return this?.id ?? null;
    }

    set setId(id: string) {
        this.id = id;
    }

    get getUuid(): string {
        return this.uuid;
    }

    set setUuid(uuid: string) {
        this.uuid = uuid;
    }

    get getUserUuid(): string | null | undefined {
        return this.user_uuid;
    }

    set setUserUuid(user_uuid: string) {
        this.user_uuid = user_uuid;
    }

    get getTitle(): string | null | undefined {
        return this.title;
    }

    set setTitle(title: string) {
        this.title = title;
    }

    get getCategory(): string | null | undefined {
        return this.category;
    }

    set setCategory(category: string) {
        this.category = category;
    }

    get getContent(): string | null | undefined {
        return this.content;
    }

    set seContent(content: string) {
        this.content = content;
    }

    get getClan(): { [k: string]: any } | null | undefined {
        return this.clan;
    }

    set seClan(clan: { [k: string]: any }) {
        this.clan = clan;
    }

    get getSlug(): string | null | undefined {
        return this.slug;
    }

    set setSlug(slug: string) {
        this.slug = slug;
    }

    get getAdoption(): boolean | null | undefined {
        return this.adoption
    }
    set setAdoption(adoption: boolean) {
        this.adoption = adoption
    }

    get getCloudinaryId(): string | undefined {
        return this.cloudinary_id
    }

    set setCloudinaryId(cloudinary_id: string) {
        this.cloudinary_id = cloudinary_id
    }

    get getProvinceUuid(): string | null | undefined {
        return this.province_uuid
    }
    set setProvinceUuid(province_uuid: string | null) {
        this.province_uuid = province_uuid
    }

    get getAge(): number | null | undefined {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }

    get getClanUuid(): string | null | undefined {
        return this.clan_uuid;
    }

    get getCityUuid(): string | null | undefined {
        return this.city_uuid
    }

    set setCityUuid(city_uuid: string | null) {
        this.city_uuid = city_uuid
    }

    set setClanUuid(clan_uuid: string) {
        this.clan_uuid = clan_uuid;
    }

    get getAnimalType(): string | null | undefined {
        return this.animal_type;
    }

    set setAnimalType(animal_type: string) {
        this.animal_type = animal_type;
    }

    get getImage(): string | null | undefined {
        return this.image;
    }

    set setImage(image: string) {
        this.image = image;
    }

    get getUser(): UserEntity | null | undefined {
        return this.user
    }

    set setUser(user: UserEntity | null) {
        this.user = user
    }

    get getComment(): IComment[] | [] | any {
        return this.comment;
    }

    set setComment(comment: IComment[] | []) {
        this.comment = comment;
    }

    get getDeletedAt(): Date | null | undefined {
        return this.deleted_at;
    }

    set setDeletedAt(deleted_at: Date) {
        this.deleted_at = deleted_at;
    }

    get getCreatedAt(): Date | null | undefined {
        return this.created_at;
    }

    set setCreatedAt(created_at: Date) {
        this.created_at = created_at;
    }

    get getUpdatedAt(): Date | null | undefined {
        return this.updated_at;
    }

    set setUpdatedAt(updated_at: Date | null) {
        this.updated_at = updated_at;
    }

    toJson(): object {
        return {
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            title: this.title,
            content: this.content,
            slug: this.slug,
            age: this.age,
            category: this.category,
            clan_uuid: this.clan_uuid,
            animal_type: this.animal_type,
            user: this.user,
            clan: this.clan,
            adoption: this.adoption,
            image: this.image,
            comment: this.comment,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }

    toListData(): {} {
        return {
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            title: this.title,
            content: this.content,
            slug: this.slug,
            age: this.age,
            category: this.category,
            clan_uuid: this.clan_uuid,
            animal_type: this.animal_type,
            user: this.user,
            adoption: this.adoption,
            clan: this.clan,
            want_adaption: this.want_adoption,
            image: this.image,
            comment: this.comment,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }

    toDetailData(): {} {
        return {
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            title: this.title,
            content: this.content,
            slug: this.slug,
            age: this.age,
            category: this.category,
            clan_uuid: this.clan_uuid,
            clan: this.clan,
            animal_type: this.animal_type,
            adoption: this.adoption,
            want_adaption: this.want_adoption,
            image: this.image,
            comment: this.comment,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }

}



export default PostQueryEntity;
