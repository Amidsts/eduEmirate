"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBlogValidator = void 0;
const general_1 = require("../helpers/general");
const joi_1 = __importDefault(require("joi"));
function createBlogValidator(payload) {
    return (0, general_1.validate)(joi_1.default.object({
        title: joi_1.default.string().required(),
        description: joi_1.default.string().required()
    }), payload);
}
exports.createBlogValidator = createBlogValidator;
