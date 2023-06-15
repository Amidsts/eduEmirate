import { Router } from "express";

import { createBlogController, getBlogController, getBlogsController } from "../controllers/blogController";
import upload from "../config/multer";
import { uploadImage } from "../middleware/fileUpload";

const router = Router()


router.post("/create_blog", upload.single("blogImage"), uploadImage, createBlogController)
router.get("/get_blogs", getBlogsController)
router.get("/get_blog/:blogId", getBlogController)


export default router