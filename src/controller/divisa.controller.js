const { ResponseStructure } = require("../helpers/ResponseStructure");
const divisaService = require("../services/divisa.service");

const obtenerDivisas = async (req, res) => {
  try {
    const divisas = await divisaService.obtenerDivisas();
    ResponseStructure.status = 200;
    ResponseStructure.message = "Divisas obtenidas exitosamente";
    ResponseStructure.data = divisas;
    res.status(200).json(ResponseStructure);
  } catch (error) {
    console.error("Error al obtener las divisas:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al obtener las divisas";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

const obtenerDivisasPorId = async (req, res) => {
    try {
      const divisaId = req.params.id;
      const divisa = await divisaService.obtenerdivisaPorId(divisaId);
      if (!divisa) {
        ResponseStructure.status = 404;
        ResponseStructure.message = "divisa no encontrada";
        ResponseStructure.data = null;
      } else {
        ResponseStructure.status = 200;
        ResponseStructure.message = "divisa obtenida exitosamente";
        ResponseStructure.data = divisa;
      }
      res.status(ResponseStructure.status).json(ResponseStructure);
    } catch (error) {
      console.error("Error al obtener la divisa por ID:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al obtener la divisa por ID";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };
  
  const crearDivisa = async (req, res) => {
    try {
      const nuevaDivisa = req.body;
      const divisaCreada = await divisaService.crearDivisa(nuevaDivisa);
      ResponseStructure.status = 201;
      ResponseStructure.message = "Divisa creada exitosamente";
      ResponseStructure.data = divisaCreada;
      res.status(201).json(ResponseStructure);
    } catch (error) {
      console.error("Error al crear la divisa:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al crear la divisa";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };
  
  const modificarDivisaPorId = async (req, res) => {
    try {
      const divisaId = req.params.id;
      const nuevosDatos = req.body;
      const divisaModificada = await divisaService.modificarDivisaPorId(divisaId, nuevosDatos);
      if (!divisaModificada) {
        ResponseStructure.status = 404;
        ResponseStructure.message = "Divisa no encontrada";
        ResponseStructure.data = null;
      } else {
        ResponseStructure.status = 200;
        ResponseStructure.message = "Divisa modificada exitosamente";
        ResponseStructure.data = divisaModificada;
      }
      res.status(ResponseStructure.status).json(ResponseStructure);
    } catch (error) {
      console.error("Error al modificar la divisa por ID:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al modificar la divisa por ID";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };
  
  const eliminarDivisaPorId = async (req, res) => {
    try {
      const divisaId = req.params.id;
      const divisaEliminada = await divisaService.eliminarDivisaPorId(divisaId);
      if (!divisaEliminada) {
        ResponseStructure.status = 404;
        ResponseStructure.message = "Divisa no encontrada";
        ResponseStructure.data = null;
      } else {
        ResponseStructure.status = 200;
        ResponseStructure.message = "Divisa eliminada exitosamente";
        ResponseStructure.data = divisaEliminada;
      }
      res.status(ResponseStructure.status).json(ResponseStructure);
    } catch (error) {
      console.error("Error al eliminar la Divisa por ID:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al eliminar la Divisa por ID";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };

module.exports = {
  obtenerDivisas,
  obtenerDivisasPorId,
  crearDivisa,
  modificarDivisaPorId,
  eliminarDivisaPorId
};
