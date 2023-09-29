"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const subscriberSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
const subscriber = (0, mongoose_1.model)("subscriber", subscriberSchema);
exports.default = subscriber;
