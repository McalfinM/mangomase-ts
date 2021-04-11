"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseEntity_1 = __importDefault(require("./baseEntity"));
class ClanEntity extends baseEntity_1.default {
    constructor(params) {
        super();
        this.id = params.id;
        this.uuid = params.uuid;
        this.animal_type_uuid = params.animal_type_uuid;
        this.name = params.name;
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
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getAnimalTypeUuid() {
        return this.animal_type_uuid;
    }
    set getAnimalTypeUuid(animal_type_uuid) {
        this.animal_type_uuid = animal_type_uuid;
    }
    toJson() {
        return {
            uuid: this.uuid,
            animal_type_uuid: this.animal_type_uuid,
            name: this.name,
        };
    }
}
exports.default = ClanEntity;
