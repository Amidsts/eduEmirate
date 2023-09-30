import {Request, Response, NextFunction} from "express"
import fs from "fs"


import { v2 } from "cloudinary"
import { ENV} from "../helpers/general"
import { clientError } from "../helpers/custom_error"



export async function uploadImage(req: Request, res: Response, next: NextFunction) {

    if (req.file) {
    const buffer = req.file.buffer

    v2.config({
        cloud_name:  ENV("cloudinary_name"),
        api_key: ENV("cloudinary_apiKey"),
        api_secret: ENV("cloudinary_apiSecret")
    })

    v2.uploader.upload_stream(
        (err, uploadedImage: any) => {
            if (err) {
                throw new clientError(`unable to upload image ${err.message}`, 400)
            }

            res.locals.image = {
                imageId: uploadedImage.public_id,
                imageUrl: uploadedImage.secure_url
            }
            next()
        }
    ).end(buffer)
       
    } else throw new clientError("pls upload an image", 400)
}