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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailTemplates = exports.sendMail = void 0;
const sgMail = require("@sendgrid/mail");
const general_1 = require("../helpers/general");
sgMail.setApiKey((0, general_1.ENV)("sendgrid_api_key"));
function sendMail(option) {
    return __awaiter(this, void 0, void 0, function* () {
        const message = {
            to: option.senderMail,
            from: "",
            subject: option.Subject,
            html: option.Message
        };
        try {
            yield sgMail.send(message);
            console.log("message sent!");
        }
        catch (err) {
            console.log("mailer", err);
        }
    });
}
exports.sendMail = sendMail;
class MailTemplates {
    getInTouch(option) {
        return ` <p> You have just received a new service inquiry from your website. Here are the details</p> <br> <p>Name: ${option.name} <br> Phone Number: ${option.phoneNo} <br> Type of Service Needed: ${option.service} </p> <br> <p>Please follow up with the user as soon as possible to discuss their requirements and provide any necessary information. You can reach out to them at the provided phone number or email address.</p>`;
    }
}
exports.mailTemplates = new MailTemplates();
