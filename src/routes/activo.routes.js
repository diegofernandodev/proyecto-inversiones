const { Router } = require("express");
const router = Router();
const {
  obtenerActivos,
  obtenerActivoPorId,
  crearActivo,
  modificarActivoPorId,
  eliminarActivoPorId
} = require("../controller/activo.controller");

router.get("/", (req, res) => {
  res.send("Inversiones");
});

// Ruta para obtener todos los activos
router.get("/obtenerTodosLosActivos", obtenerActivos);

// Ruta para obtener un activo por su ID
router.get("/obtenerActivo/:id", obtenerActivoPorId);

// Ruta para modificar un activo por su ID
router.put("/modificarActivo/:id", modificarActivoPorId);

// Ruta para eliminar un activo por su ID
router.delete("/eliminarActivo/:id",  eliminarActivoPorId);

// Ruta para guardar un activo
router.post("/guardarActivo", crearActivo);

module.exports = router;
