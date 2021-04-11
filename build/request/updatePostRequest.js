"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdatePostRequest {
    constructor(body) {
        this._user_uuid = body.user_uuid;
        this._title = body.title;
        this._content = body.content;
        this._slug = body.slug;
        this._age = body.age;
        this._category = body.category;
        this._clan_uuid = body.clan_uuid;
        this._animal_type = body.animal_type;
        this._adoption = body.adoption;
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
    get clan_uuid() {
        return this._clan_uuid;
    }
    get category() {
        return this.category;
    }
    get adoption() {
        return this._adoption;
    }
    get animal_type() {
        return this._animal_type;
    }
    get image() {
        return this._image;
    }
}
exports.default = UpdatePostRequest;
