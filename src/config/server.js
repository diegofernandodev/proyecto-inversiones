const express = require("express");
const routesInversiones = require("../routes/inversion.routes");
const routesDivisas = require("../routes/divisa.routes");
const routesActivos = require("../routes/activo.routes");
const routesUploadImages = require("../routes/UploadImage.routes")

const cors = require("cors");

const appLittlebox = express();
const port = 4100;
appLittlebox.use(express.json());

appLittlebox.use(cors());
appLittlebox.use(routesInversiones);
appLittlebox.use(routesDivisas);
appLittlebox.use(routesActivos);
appLittlebox.use(routesUploadImages);

appLittlebox.set("port", process.env.PORT || port);

module.exports = appLittlebox;
