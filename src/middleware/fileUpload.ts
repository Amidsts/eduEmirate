import {Request, Response, NextFunction} from "express"
import fs from "fs"


import { v2 } from "cloudinary"
import { ENV} from "../helpers/general"
import { clientError } from "../helpers/custom_error"



export async function uploadImage(req: Request, res: Response, next: NextFunction) {

    if (req.file) {

        const imagePath = req.file.path

        v2.config({
            cloud_name:  ENV("cloudinary_name"),
            api_key: ENV("cloudinary_apiKey"),
            api_secret: ENV("cloudinary_apiSecret")
        })

        v2.uploader.upload(imagePath)
        .then( (uploadedImage) => {

            res.locals.image = {
                imageId: uploadedImage.public_id,
                imageUrl: uploadedImage.secure_url
            }

            fs.unlinkSync(imagePath) //delete image from disk storage

            next()
        })
        .catch( (err) => {
            
            throw new clientError(`unable to upload image ${err.message}`, 400)
        })
    
       
    } else throw new clientError("pls upload an image", 400)

}