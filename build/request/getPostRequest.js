"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetPostRequest {
    constructor(queryParams) {
        this._uuid = queryParams.uuid,
            this._user_uuid = queryParams.user_uuid;
        this._title = queryParams.title;
        this._content = queryParams.content;
        this._slug = queryParams.slug;
        this._age = queryParams.age;
        this._clan_uuid = queryParams.clan_uuid;
        this._category = queryParams.category;
        this._animal_type = queryParams.animal_type;
        this._for_adoption = queryParams.for_adoption;
        this._want_adoption = queryParams.want_adoption;
        this._sort_by = queryParams.sort_by,
            this._page = queryParams.page,
            this._limit = queryParams.limit,
            this._search = queryParams.search;
    }
    get search() {
        return this._search;
    }
    get user_uuid() {
        return this._user_uuid;
    }
    get uuid() {
        return this._uuid;
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
        return this._category;
    }
    get animal_type() {
        return this._animal_type;
    }
    get for_adoption() {
        return this._for_adoption;
    }
    get want_adoption() {
        return this._want_adoption;
    }
    get sort() {
        return this._sort_by;
    }
    get page() {
        return this._page;
    }
    get limit() {
        return this._limit;
    }
}
exports.default = GetPostRequest;
