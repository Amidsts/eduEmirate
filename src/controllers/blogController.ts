import { Request, Response } from "express";

import {
    createBlogService, getBlogService, getBlogsService 
} from "../services/blogService";


export async function createBlogController(req: Request, res: Response) {
    try {
        const {image} = res.locals

        const response = await createBlogService(req.body, image)

        return res.json(response)
    } catch (error) {
        res.send(error)
    }
}

export async function getBlogsController(req: Request, res: Response) {
    try {

        const response = await getBlogsService(
            parseInt(req.query.limit as string),
            parseInt(req.query.page as string)
        )

        return res.json(response)
    } catch (error) {
        res.send(error)
    }
}

export async function getBlogController(req: Request, res: Response) {
    try {

        const response = await getBlogService(req.params.blogId)

        return res.json(response)
    } catch (error) {
        res.send(error)
    }
}