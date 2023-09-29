"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInTouchValidator = exports.createBlogValidator = void 0;
const general_1 = require("../helpers/general");
const joi_1 = __importDefault(require("joi"));
function createBlogValidator(payload) {
    return (0, general_1.validate)(joi_1.default.object({
        title: joi_1.default.string().required(),
        description: joi_1.default.string().required()
    }), payload);
}
exports.createBlogValidator = createBlogValidator;
function getInTouchValidator(payload) {
    return (0, general_1.validate)(joi_1.default.object({
        name: joi_1.default.string().trim().required(),
        email: joi_1.default.string().trim().required(),
        phone_No: joi_1.default.string().trim().required(),
        category: joi_1.default.string().valid("Personal Branding & Development", "Career Guidance & Development", "Study & Work Abroad Advisory", "Effective & Strategic Communication", "Recruitment & Internship Outsourcing", "Development Trainings & Mentoring").required()
    }), payload);
}
exports.getInTouchValidator = getInTouchValidator;
