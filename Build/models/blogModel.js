"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const Blog = (0, mongoose_1.model)("blog", blogSchema);
exports.default = Blog;
