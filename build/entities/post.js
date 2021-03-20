"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class PostEntity extends baseEntity_1.default {
    constructor(params) {
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
    get getId() {
        var _a;
        return (_a = this === null || this === void 0 ? void 0 : this.id) !== null && _a !== void 0 ? _a : null;
    }
    set setId(id) {
        this.id = id;
    }
    get getUuid() {
        return this.uuid;
    }
    set setUuid(uuid) {
        this.uuid = uuid;
    }
    get getUserUuid() {
        return this.user_uuid;
    }
    set setUserUuid(user_uuid) {
        this.user_uuid = user_uuid;
    }
    get getTitle() {
        return this.title;
    }
    set setTitle(title) {
        this.title = title;
    }
    get getContent() {
        return this.content;
    }
    set seContent(content) {
        this.content = content;
    }
    get getSlug() {
        return this.slug;
    }
    set setSlug(slug) {
        this.slug = slug;
    }
    get getForAdoption() {
        return this.for_adoption;
    }
    set setForAdoption(for_adoption) {
        this.for_adoption = for_adoption;
    }
    get getWantdoption() {
        return this.want_adoption;
    }
    set setWantdoption(want_adoption) {
        this.want_adoption = want_adoption;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
    get getClan() {
        return this.clan;
    }
    set setClan(clan) {
        this.clan = clan;
    }
    get getAnimalType() {
        return this.animal_type;
    }
    set setAnimalType(animal_type) {
        this.animal_type = animal_type;
    }
    get getImage() {
        return this.image;
    }
    set setImage(image) {
        this.image = image;
    }
    get getDeletedAt() {
        return this.deleted_at;
    }
    set setDeletedAt(deleted_at) {
        this.deleted_at = deleted_at;
    }
    get getCreatedAt() {
        return this.created_at;
    }
    set setCreatedAt(created_at) {
        this.created_at = created_at;
    }
    get getUpdatedAt() {
        return this.updated_at;
    }
    set setUpdatedAt(updated_at) {
        this.updated_at = updated_at;
    }
    toJson() {
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
exports.default = PostEntity;
