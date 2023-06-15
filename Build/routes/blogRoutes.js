"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
const multer_1 = __importDefault(require("../config/multer"));
const fileUpload_1 = require("../middleware/fileUpload");
const router = (0, express_1.Router)();
router.post("/create_blog", multer_1.default.single("blogImage"), fileUpload_1.uploadImage, blogController_1.createBlogController);
router.get("/get_blogs", blogController_1.getBlogsController);
router.get("/get_blog/:blogId", blogController_1.getBlogController);
exports.default = router;
