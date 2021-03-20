import BaseEntity from "./baseEntity";
import { IPostEntity } from './interfaces/post'

class PostEntity extends BaseEntity {
    protected id?: string | null
    protected uuid?: string | null
    protected user_uuid?: string | null
    protected title?: string | null
    protected content?: string | null
    protected slug?: string | null
    protected age?: number | null
    protected clan?: string | null
    protected animal_type?: string | null
    protected for_adoption?: boolean | null
    protected want_adoption?: boolean | null
    protected image?: string | null
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
        this.animal_type = params.animal_type;
        this.for_adoption = params.for_adoption;
        this.want_adoption = params.want_adoption;
        this.image = params.image;
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

    get getUuid(): string | null | undefined {
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

    get getContent(): string | null | undefined {
        return this.content;
    }

    set seContent(content: string) {
        this.content = content;
    }

    get getSlug(): string | null | undefined {
        return this.slug;
    }

    set setSlug(slug: string) {
        this.slug = slug;
    }

    get getForAdoption(): boolean | null | undefined {
        return this.for_adoption
    }
    set setForAdoption(for_adoption: boolean) {
        this.for_adoption = for_adoption
    }
    get getWantdoption(): boolean | null | undefined {
        return this.want_adoption
    }
    set setWantdoption(want_adoption: boolean) {
        this.want_adoption = want_adoption
    }

    get getAge(): number | null | undefined {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }

    get getClan(): string | null | undefined {
        return this.clan;
    }

    set setClan(clan: string) {
        this.clan = clan;
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
            id: this.id,
            uuid: this.uuid,
            user_uuid: this.user_uuid,
            title: this.title,
            content: this.content,
            slug: this.slug,
            age: this.age,
            clan: this.clan,
            animal_type: this.animal_type,
            for_adaption: this.for_adoption,
            want_adaption: this.want_adoption,
            image: this.image,
            created_at: this.created_at,
            updated_at: this.updated_at,
        };
    }
}

export default PostEntity;