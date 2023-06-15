"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.clientError = void 0;
class BaseError extends Error {
}
class clientError extends BaseError {
    constructor(errMessage, statuscode) {
        super();
        this.success = false,
            this.errorName = "client error",
            this.message = errMessage,
            this.statusCode = statuscode,
            this.data = {};
    }
}
exports.clientError = clientError;
class serverError extends BaseError {
    constructor(errMessage, statuscode) {
        super();
        this.success = false,
            this.errorName = "server error",
            this.message = errMessage,
            this.statusCode = statuscode,
            this.data = {};
    }
}
exports.serverError = serverError;
