"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userInfoController_1 = require("../controllers/userInfoController");
const openRouter = express_1.default.Router();
openRouter.post("/get-resume", userInfoController_1.giveResponse);
exports.default = openRouter;
