"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const clientRoutes_1 = __importDefault(require("../routes/clientRoutes"));
require("../config/db");
const app = (0, express_1.default)();
app
    .use(express_1.default.urlencoded({ extended: true }))
    .use(express_1.default.json())
    .use((0, cors_1.default)())
    .use((0, morgan_1.default)("tiny"))
    .use((0, helmet_1.default)());
app.get("/", (req, res) => {
    res.send("Hello from edu emirate");
});
app.use("/api/v1", clientRoutes_1.default);
exports.default = app;
