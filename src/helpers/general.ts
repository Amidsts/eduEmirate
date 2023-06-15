import dotenv from "dotenv"

import { clientError } from "./custom_error"

dotenv.config()

export function ENV(secret: string) {
    const {env} = process

    return env[secret] || ""
}

export function validate(schema: {[key: string]: any}, inputData: {[key: string]: any}) {

    const {error, value} = schema.validate(inputData)
    
    if (error) throw new clientError(`${value} ${error}`, 400)

    return value

}

export function responsehandler ( Message: string, payload?: any,) {

    return {
        success: true,
        message: Message,
        statusCode: 200,
        data: payload
    }
}
