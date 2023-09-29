"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.responsehandler = exports.validate = exports.ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const custom_error_1 = require("./custom_error");
dotenv_1.default.config();
function ENV(secret) {
    const { env } = process;
    return env.PORT || env[secret] || "";
}
exports.ENV = ENV;
function validate(schema, inputData) {
    const { error, value } = schema.validate(inputData);
    if (error)
        throw new custom_error_1.clientError(`${value} ${error}`, 400);
    return value;
}
exports.validate = validate;
function responsehandler(Message, payload) {
    return {
        success: true,
        message: Message,
        statusCode: 200,
        data: payload
    };
}
exports.responsehandler = responsehandler;
