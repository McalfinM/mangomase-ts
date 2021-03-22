"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const partner_1 = __importDefault(require("../models/partner"));
class PartnerRepository {
    create(partnerEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(partnerEntity, 'ini console request');
            const post = yield partner_1.default.create({
                uuid: partnerEntity.getUuid,
                user_uuid: partnerEntity.getUserUuid,
                name: partnerEntity.getName,
                desription: partnerEntity.getDesription,
                hours_close_open: partnerEntity.getHoursCloseOpen,
                image: partnerEntity.getImage,
                category: partnerEntity.getCategory,
                deleted_at: partnerEntity.getDeletedAt,
                created_at: partnerEntity.getCreatedAt,
                updated_at: partnerEntity.getUpdatedAt,
            });
            return partnerEntity;
        });
    }
    update(postEntity, uuid, comment) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield partner_1.default.updateOne({ "comment.uuid": uuid, }, {
                $set: {
                    "comment.$.comment": comment,
                    "comment.$.updated_at": new Date
                }
            });
            return post;
        });
    }
    delete(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield partner_1.default.updateOne({ "comment.uuid": uuid }, {
                $set: {
                    "comment.$.deleted_at": new Date
                }
            });
            return post;
        });
    }
}
exports.default = new PartnerRepository();
