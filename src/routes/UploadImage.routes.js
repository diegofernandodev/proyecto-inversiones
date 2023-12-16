const express = require("express")
const router = express.Router()
const upload = require("../middleware/MulterMiddleware")

const { uploadImage } = require("../controller/UploadImage.controller")

router.post("/uploadSingleImage", upload.single("image"), uploadImage)

module.exports = router