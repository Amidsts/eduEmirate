"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const general_1 = require("../helpers/general");
const logger_1 = __importDefault(require("../helpers/logger"));
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};
(0, mongoose_1.connect)((0, general_1.ENV)("mongouri"), options).then((e) => {
    logger_1.default.info("connected to database successfully");
})
    .catch((err) => {
    logger_1.default.info(err);
});
