"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clientController_1 = require("../controllers/clientController");
const multer_1 = __importDefault(require("../config/multer"));
const fileUpload_1 = require("../middleware/fileUpload");
const router = (0, express_1.Router)();
router.post("/get_In_Touch", clientController_1.getInTouchController);
router.post("/create_blog", multer_1.default.single("blogImage"), fileUpload_1.uploadImage, clientController_1.createBlogController);
router.get("/get_blogs", clientController_1.getBlogsController);
router.get("/get_blog/:blogId", clientController_1.getBlogController);
exports.default = router;
