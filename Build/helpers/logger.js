"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const general_1 = require("./general");
const { combine, errors, timestamp, printf, colorize } = winston_1.format;
const logformat = printf(({ level, timestamp, message, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`;
});
const logger = (0, winston_1.createLogger)({
    level: "info",
    format: combine(colorize(), timestamp({ format: "YY-MM-DD HH-mm-ss" }), errors({ stack: true }), logformat),
    transports: [new winston_1.transports.Console()]
});
if ((0, general_1.ENV)("NODE_ENV") === "production") {
    logger.add(new winston_1.transports.File({
        filename: "error.log"
    }));
}
exports.default = logger;
