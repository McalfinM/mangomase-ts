"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatePartnerRequest {
    constructor(body) {
        this._user_uuid = body.user_uuid;
        this._name = body.name;
        this._description = body.description;
        this._hours_close_open = body.hours_close_open;
        this._image = body.image;
        this._category = body.category;
        this._created_at = body.created_at;
        this._updated_at = body.updated_at;
        this._deleted_at = body.deleted_at;
    }
    get user_uuid() {
        return this._user_uuid;
    }
    get name() {
        return this._name;
    }
    get description() {
        return this._description;
    }
    get hours_close_open() {
        return this._hours_close_open;
    }
    get image() {
        return this._image;
    }
    get category() {
        return this._category;
    }
    get created_at() {
        return this._created_at;
    }
    get updated_at() {
        return this._updated_at;
    }
    get deleted_at() {
        return this._deleted_at;
    }
}
exports.default = CreatePartnerRequest;
