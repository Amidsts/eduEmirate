"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogController = exports.getBlogsController = exports.createBlogController = exports.getInTouchController = void 0;
const clientService_1 = require("../services/clientService");
function getInTouchController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, clientService_1.getInTouchService)(req.body);
            return res.json(response);
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.getInTouchController = getInTouchController;
function createBlogController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { image } = res.locals;
            const response = yield (0, clientService_1.createBlogService)(req.body, image);
            return res.json(response);
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.createBlogController = createBlogController;
function getBlogsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, clientService_1.getBlogsService)(parseInt(req.query.limit), parseInt(req.query.page));
            return res.json(response);
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.getBlogsController = getBlogsController;
function getBlogController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (0, clientService_1.getBlogService)(req.params.blogId);
            return res.json(response);
        }
        catch (error) {
            res.send(error);
        }
    });
}
exports.getBlogController = getBlogController;
