"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImage = void 0;
const fs_1 = __importDefault(require("fs"));
const cloudinary_1 = require("cloudinary");
const general_1 = require("../helpers/general");
const custom_error_1 = require("../helpers/custom_error");
function uploadImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.file) {
            const imagePath = req.file.path;
            cloudinary_1.v2.config({
                cloud_name: (0, general_1.ENV)("cloudinary_name"),
                api_key: (0, general_1.ENV)("cloudinary_apiKey"),
                api_secret: (0, general_1.ENV)("cloudinary_apiSecret")
            });
            cloudinary_1.v2.uploader.upload(imagePath)
                .then((uploadedImage) => {
                res.locals.image = {
                    imageId: uploadedImage.public_id,
                    imageUrl: uploadedImage.secure_url
                };
                fs_1.default.unlinkSync(imagePath); //delete image from disk storage
                next();
            })
                .catch((err) => {
                throw new custom_error_1.clientError(`unable to upload image ${err.message}`, 400);
            });
        }
        else
            throw new custom_error_1.clientError("pls upload an image", 400);
    });
}
exports.uploadImage = uploadImage;
