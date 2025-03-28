"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userInfoSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    phone: String,
    location: String,
    links: {
        linkedin: String,
        github: String,
        portfolio: String
    },
    summary: String,
});
const userInfoSch = mongoose_1.default.model("UserInfo", userInfoSchema);
exports.default = userInfoSch;
