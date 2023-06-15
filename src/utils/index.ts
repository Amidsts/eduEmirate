import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"

import blogRoutes from "../routes/blogRoutes"



require("../config/db")
const app = express()

app
    .use(express.urlencoded({extended: true}))
    .use(express.json())
    .use(cors())
    .use(morgan("tiny"))
    .use(helmet())


app.use("/api/v1", blogRoutes)

export default app