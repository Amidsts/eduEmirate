const sgMail = require("@sendgrid/mail")
import { ENV } from "../helpers/general"

sgMail.setApiKey(ENV("sendgrid_api_key"))

export async function sendMail(option: {[key: string]: any}) {
    
    const message = {
        to: option.senderMail,
        from: "",
        subject: option.Subject,
        html: option.Message
    }
    
    try {

        await sgMail.send(message)

        console.log("message sent!")
    } catch (err) {
        console.log("mailer", err);
        
    }

}

class MailTemplates {

    getInTouch (option: {[key: string]: any}) {
        return ` <p> You have just received a new service inquiry from your website. Here are the details</p> <br> <p>Name: ${option.name} <br> Phone Number: ${option.phoneNo} <br> Type of Service Needed: ${option.service} </p> <br> <p>Please follow up with the user as soon as possible to discuss their requirements and provide any necessary information. You can reach out to them at the provided phone number or email address.</p>`
    }
}


export const mailTemplates = new MailTemplates()