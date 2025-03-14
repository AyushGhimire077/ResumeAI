"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
//files import
const connectDB_1 = require("./config/connectDB");
const openResponse_1 = __importDefault(require("./routes/openResponse"));
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)({
    origin: "http://localhost:5173", // Allow frontend to access backend
    methods: ["GET", "POST"], // Allow GET and POST methods
    allowedHeaders: ["Content-Type"], // Allow specific headers
}));
app.use(express_1.default.json());
//rest apis
app.use('/api', openResponse_1.default);
//connect to db
(0, connectDB_1.connectDB)();
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
exports.default = (req, res) => {
    return app(req, res);
};
