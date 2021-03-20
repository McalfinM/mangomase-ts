"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const consola_1 = __importDefault(require("consola"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let url;
// if (process.env.NODE_ENV === 'dev') {
//     url = process.env.MONGO_URI_TEST
// } else {
//     url = process.env.MONGO_URI
// }
consola_1.default.log(url, 'ini urlny db');
mongoose_1.default.connect('mongodb+srv://calfin08:codered2132@betulin.jvruk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    consola_1.default.success({ message: 'MongoDB connected', badge: false });
}).catch(error => console.error({ message: error, badge: false }));
