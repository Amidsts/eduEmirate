import multer from "multer"


const upload = multer({storage: multer.memoryStorage()})

//multer({dest: "../uploads"})

export default upload