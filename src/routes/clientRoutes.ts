import { Router } from "express";

import { 
    createBlogController, 
    getBlogController, 
    getBlogsController,
    getInTouchController
} from "../controllers/clientController";
import upload from "../config/multer";
import { uploadImage } from "../middleware/fileUpload";

const router = Router()


router.post("/get_In_Touch", getInTouchController)

router.post("/create_blog", upload.single("blogImage"), uploadImage, createBlogController)
router.get("/get_blogs", getBlogsController)
router.get("/get_blog/:blogId", getBlogController)


export default router