"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatePostRequest {
    constructor(body) {
        this._user_uuid = body.user_uuid;
        this._title = body.title;
        this._content = body.content;
        this._slug = body.slug;
        this._age = body.age;
        this._clan = body.clan;
        this._animal_type = body.animal_type;
        this._for_adoption = body.for_adoption;
        this._want_adoption = body.want_adoption;
        this._image = body.image;
    }
    get user_uuid() {
        return this._user_uuid;
    }
    get title() {
        return this._title;
    }
    get content() {
        return this._content;
    }
    get slug() {
        return this._slug;
    }
    get age() {
        return this._age;
    }
    get clan() {
        return this._clan;
    }
    get for_adoption() {
        return this._for_adoption;
    }
    get want_adoption() {
        return this._want_adoption;
    }
    get animal_type() {
        return this._animal_type;
    }
    get image() {
        return this._image;
    }
}
exports.default = CreatePostRequest;
