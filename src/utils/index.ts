import express, { Response, Request } from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"

import clientRoutes from "../routes/clientRoutes"



require("../config/db")
const app = express()

app
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .use(cors())
    .use(morgan("tiny"))
    .use(helmet())

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from edu emirate")
})

app.use("/api/v1", clientRoutes)

export default app