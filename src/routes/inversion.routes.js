const { Router } = require("express");
const router = Router();
const {
  obtenerInversiones,
  obtenerInversionPorId,
  crearInversion,
  modificarInversionPorId,
  eliminarInversionPorId,
} = require("../controller/inversion.controller");

router.get("/", (req, res) => {
  res.send("Inversiones");
});

// Ruta para obtener todas las inversiones
router.get("/obtenerTodasLasInversiones", obtenerInversiones);

// Ruta para obtener una inversion por su ID
router.get("/obtenerInversion/:id", obtenerInversionPorId);

// Ruta para modificar una inversion por su ID
router.put("/modificarInversion/:id", modificarInversionPorId);

// Ruta para eliminar una inversion por su ID
router.delete("/eliminarInversion/:id",  eliminarInversionPorId);

// Ruta para guardar una nueva inversion
router.post("/guardarInversion", crearInversion);

module.exports = router;
