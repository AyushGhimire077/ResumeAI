"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleAI = void 0;
const generative_ai_1 = require("@google/generative-ai");
require("dotenv/config");
if (!process.env.GOOGLE_GEMI_API) {
    console.log("Open AI API key not found");
    process.exit(1);
}
//configure openai
exports.googleAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLE_GEMI_API);
