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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBlogService = exports.getBlogsService = exports.createBlogService = exports.getInTouchService = void 0;
const custom_error_1 = require("../helpers/custom_error");
const general_1 = require("../helpers/general");
const blogModel_1 = __importDefault(require("../models/blogModel"));
const subscriberModel_1 = __importDefault(require("../models/subscriberModel"));
const clientValidator_1 = require("../validators/clientValidator");
const mailer_1 = require("../config/mailer");
function getInTouchService(payload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, phone_No, category } = (0, clientValidator_1.getInTouchValidator)(payload);
            const get_In_Touch = yield new subscriberModel_1.default({
                name,
                email,
                phone_No,
                category
            }).save();
            // console.log(newBlog._id);
            (0, mailer_1.sendMail)({
                senderMail: get_In_Touch.email,
                Subject: "New Subscriber",
                Message: mailer_1.mailTemplates.getInTouch({
                    name: get_In_Touch.name,
                    phoneNo: get_In_Touch.phone_No,
                    service: get_In_Touch.category
                })
            })
                .then((response) => {
                console.log("nst: ", response);
            });
            return (0, general_1.responsehandler)("your informations has been received!");
        }
        catch (error) {
            return error;
        }
    });
}
exports.getInTouchService = getInTouchService;
function createBlogService(payload, imgPayload) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, description } = (0, clientValidator_1.createBlogValidator)(payload);
            const newBlog = yield new blogModel_1.default({
                title,
                description,
                image: imgPayload
            }).save();
            // console.log(newBlog._id);
            return (0, general_1.responsehandler)("success", newBlog);
        }
        catch (error) {
            return error;
        }
    });
}
exports.createBlogService = createBlogService;
//apply pagination
function getBlogsService(nPerPage, pageNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const totalBlogs = yield blogModel_1.default.find().count();
            const blogs = yield blogModel_1.default
                .find()
                .sort({ id: -1 })
                .skip(nPerPage > totalBlogs || pageNumber > totalBlogs
                ? 0
                : pageNumber > 0
                    ? ((pageNumber - 1) * nPerPage)
                    : 0)
                .limit(nPerPage)
                .exec();
            return (0, general_1.responsehandler)("success", blogs);
        }
        catch (error) {
            return error;
        }
    });
}
exports.getBlogsService = getBlogsService;
function getBlogService(blogId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const blogExists = yield blogModel_1.default.findById(blogId);
            if (!blogExists)
                throw new custom_error_1.clientError("Blog not found", 400);
            return (0, general_1.responsehandler)("success", blogExists);
        }
        catch (error) {
            return error;
        }
    });
}
exports.getBlogService = getBlogService;
