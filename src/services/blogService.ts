import { clientError } from "../helpers/custom_error"
import { responsehandler } from "../helpers/general"
import blog from "../models/blogModel"
import { createBlogValidator } from "../validators/blogValidator"


export async function createBlogService(payload: {[key: string]: any}, imgPayload: {[key: string]: any}) {
    try {
        const {
            title,
            description
        } = createBlogValidator(payload)

        const newBlog = await new blog({
            title,
            description,
            image: imgPayload
        }).save()
// console.log(newBlog._id);

        return responsehandler("success", newBlog)

    } catch (error) {
        return error
    }
}

//apply pagination
export async function getBlogsService(nPerPage: number, pageNumber: number) {
    try {

        const totalBlogs = await blog.find().count()

        const blogs = await blog
        .find()
        .sort({id: -1})
        .skip(
            nPerPage > totalBlogs || pageNumber > totalBlogs
            ? 0
            : pageNumber > 0
            ? ( (pageNumber - 1) * nPerPage)
            : 0
        )
        .limit(nPerPage)
        .exec()

        return responsehandler("success", blogs)

    } catch (error) {
        return error
    }
}

export async function getBlogService(blogId: string) {
    try {

        const blogExists = await blog.findById(blogId)

        if (!blogExists) throw new clientError("Blog not found", 400)

        return responsehandler("success", blogExists)

    } catch (error) {
        return error
    }
}