import {ConnectOptions, connect} from "mongoose"

import { ENV } from "../helpers/general"
import logger from "../helpers/logger"



const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
} as ConnectOptions



connect(ENV("mongouri"), options).then( (e) => {
    
    logger.info("connected to database successfully")

})
.catch( (err) => {
    logger.info(err)
})