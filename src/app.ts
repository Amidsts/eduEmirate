import app from "./utils"
import { ENV } from "./helpers/general";

import logger from "./helpers/logger";



( () => {
    app.listen(ENV("port"), () => {

        logger.info(`server listening on port ${ENV("port")}`);
    })
})()