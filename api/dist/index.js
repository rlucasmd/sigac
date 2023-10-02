"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
require("express-async-errors");
require("dotenv/config");
const router_1 = require("./router");
const PORT = process.env.PORT || 3002;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
mongoose_1.default.connect(`mongodb://${DB_USERNAME}:${DB_PASSWORD}@localhost:27017`).then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(router_1.routes);
    app.use((error, req, res, next) => {
        res.sendStatus(500);
        console.error(error);
        next();
    });
    app.listen(PORT, () => {
        console.log(`🚀 server is running on http://localhost:${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});
