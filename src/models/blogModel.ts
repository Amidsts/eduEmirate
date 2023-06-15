import { Schema, model } from "mongoose";

export interface IBlog {
    title: string
    description: string
    image: {
        imageUrl: string
        imageId: string
    }
}

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        imageUrl: String,
        imageId: String
    }
}, {timestamps: true})

const Blog = model<IBlog>("blog", blogSchema)

export default Blog