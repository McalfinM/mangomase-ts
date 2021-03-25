"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let url;
if (process.env.NODE_ENV === 'dev') {
    url = process.env.MONGO_URI_TEST;
}
else {
    url = process.env.MONGO_URI;
}
mongoose_1.default.connect(url || '', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('connect');
}).catch(error => console.log(error));
