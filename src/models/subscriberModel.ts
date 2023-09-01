import { Schema, model } from "mongoose";

export interface ISubscriber {
    name: string,
    email: string,
    phone_No: string,
    category: string
}

const subscriberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_No: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [
            "Personal Branding & Development",
            "Career Guidance & Development",
            "Study & Work Abroad Advisory",
            "Effective & Strategic Communication",
            "Recruitment & Internship Outsourcing",
            "Development Trainings & Mentoring"
        ],
        required: true
    }
}, {timestamps: true})

const subscriber = model<ISubscriber>("subscriber", subscriberSchema)

export default subscriber