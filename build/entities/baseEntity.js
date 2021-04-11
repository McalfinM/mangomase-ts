"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_typed_1 = require("ts-typed");
class BaseEntity {
    constructor() { }
    toJSON() {
        return ts_typed_1.TypedSerializer.serialize(this);
    }
}
exports.default = BaseEntity;
