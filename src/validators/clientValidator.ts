import { validate } from "../helpers/general";
import joi from "joi"


export function createBlogValidator (payload: {[key: string]: any}) {
    return validate(joi.object({
        title: joi.string().required(),
        description: joi.string().required()
    }) , payload)
}

export function getInTouchValidator(payload: {[key: string]: any}) {

    return validate(joi.object({
        name: joi.string().trim().required(),
        email: joi.string().trim().required(),
        phone_No: joi.string().trim().required(),
        category: joi.string().valid(
            "Personal Branding & Development",
            "Career Guidance & Development",
            "Study & Work Abroad Advisory",
            "Effective & Strategic Communication",
            "Recruitment & Internship Outsourcing",
            "Development Trainings & Mentoring"
        ).required()
    }),
    payload)
}