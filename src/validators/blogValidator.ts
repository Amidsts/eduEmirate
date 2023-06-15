import { validate } from "../helpers/general";
import joi from "joi"


export function createBlogValidator (payload: {[key: string]: any}) {
    return validate(joi.object({
        title: joi.string().required(),
        description: joi.string().required()
    }) , payload)
}