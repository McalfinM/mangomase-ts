"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// let url: string | undefined
// if (process.env.NODE_ENV === 'dev') {
//     url = process.env.MONGO_URI_TEST
// } else {
//     url = process.env.MONGO_URI
// }
mongoose_1.default.connect('mongodb+srv://calfin08:codered2132@betulin.jvruk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('connect');
}).catch(error => console.log(error));
