"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const general_1 = require("./helpers/general");
const logger_1 = __importDefault(require("./helpers/logger"));
(() => {
    utils_1.default.listen((0, general_1.ENV)("port"), () => {
        logger_1.default.info(`server listening on port ${(0, general_1.ENV)("port")}`);
    });
})();
