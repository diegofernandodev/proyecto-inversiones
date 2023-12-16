const { Router } = require("express");
const router = Router();
const {
  obtenerDivisas,
  obtenerDivisasPorId,
  crearDivisa,
  modificarDivisaPorId,
  eliminarDivisaPorId
} = require("../controller/divisa.controller");

router.get("/", (req, res) => {
  res.send("Inversiones");
});

// Ruta para obtener todas las divisas
router.get("/obtenerTodasLasdivisas", obtenerDivisas);

// Ruta para obtener una divisa por su ID
router.get("/obtenerDivisa/:id", obtenerDivisasPorId);

// Ruta para modificar una divisa por su ID
router.put("/modificarDivisa/:id", modificarDivisaPorId);

// Ruta para eliminar una divisa por su ID
router.delete("/eliminarDivisa/:id",  eliminarDivisaPorId);

// Ruta para guardar una nueva divisa
router.post("/guardarDivisa", crearDivisa);

module.exports = router;
