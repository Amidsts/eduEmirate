import { createLogger, format, transports } from "winston";
import { ENV } from "./general";

const {
    combine,
    errors,
    timestamp,
    printf,
    colorize
} = format

const logformat = printf(
    ({
        level,
        timestamp,
        message,
        stack
    }) => {
        return `${timestamp} ${level}: ${stack || message}`
    }
)

 const logger = createLogger({
    level: "info",
    format: combine(
        colorize(),
        timestamp({format: "YY-MM-DD HH-mm-ss"}),
        errors({stack: true}),
        logformat
    ),
    transports: [new transports.Console() ]
})


if (ENV("NODE_ENV") === "production") {
    logger.add(
        new transports.File({
            filename: "error.log"
        })
    )
}

export default logger