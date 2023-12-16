
const controllerUpload = {}

controllerUpload.uploadImage = (req, res) => {
    console.log(req.file);

    res.send("se guardo exitosamente el archivo")
}

module.exports = controllerUpload