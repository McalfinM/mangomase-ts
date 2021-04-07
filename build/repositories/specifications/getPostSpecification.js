"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetPostSpecification {
    constructor(request) {
        var _a, _b, _c;
        this._search = request.search;
        this._uuid = request.uuid;
        this._user_uuid = request.user_uuid;
        this._title = request.title;
        this._content = request.content;
        this._slug = request.slug;
        this._age = request.age;
        this._clan_uuid = request.clan_uuid;
        this._category = request.category;
        this._animal_type = request.animal_type;
        this._for_adoption = request.for_adoption;
        this._want_adoption = request.want_adoption;
        this._sort_by = (_a = request.sort) !== null && _a !== void 0 ? _a : '-created_at';
        this._page = (_b = request.page) !== null && _b !== void 0 ? _b : 1;
        this._limit = (_c = request.limit) !== null && _c !== void 0 ? _c : 30;
    }
    specifies() {
        let specifications = {};
        let or_specifications = [];
        if (this._search) {
            or_specifications.push({ 'title': new RegExp(this._search, 'i') });
        }
        if (this._uuid) {
            specifications["uuid"] = this._uuid;
        }
        if (this._age) {
            specifications["age"] = this._age;
        }
        if (this._clan_uuid) {
            specifications["clan_uuid"] = this._clan_uuid;
        }
        if (or_specifications.length > 0) {
            specifications["$or"] = or_specifications;
        }
        specifications.deleted_at = null;
        return specifications;
    }
    specSort() {
        let specifications = {};
        if (this._sort_by[0] == '-') {
            specifications[this._sort_by.slice(1)] = -1;
        }
        else {
            specifications[this._sort_by] = 1;
        }
        return specifications;
    }
    paginate() {
        const specification = {
            limit: +this._limit,
            skip: 0
        };
        if (this._page > 1) {
            specification.skip = (this._page - 1) * this._limit;
        }
        return specification;
    }
}
exports.default = GetPostSpecification;
