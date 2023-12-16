const { ResponseStructure } = require("../helpers/ResponseStructure");
const inversionService = require("../services/inversion.service");

const obtenerInversiones = async (req, res) => {
  try {
    const inversiones = await inversionService.obtenerInversiones();
    ResponseStructure.status = 200;
    ResponseStructure.message = "Inversiones obtenidas exitosamente";
    ResponseStructure.data = inversiones;
    res.status(200).json(ResponseStructure);
  } catch (error) {
    console.error("Error al obtener las inversiones:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al obtener las inversiones";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

const obtenerInversionPorId = async (req, res) => {
  try {
    const inversionId = req.params.id;
    const inversion = await inversionService.obtenerInversionPorId(inversionId);
    if (!inversion) {
      ResponseStructure.status = 404;
      ResponseStructure.message = "Inversión no encontrada";
      ResponseStructure.data = null;
    } else {
      ResponseStructure.status = 200;
      ResponseStructure.message = "Inversión obtenida exitosamente";
      ResponseStructure.data = inversion;
    }
    res.status(ResponseStructure.status).json(ResponseStructure);
  } catch (error) {
    console.error("Error al obtener la inversión por ID:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al obtener la inversión por ID";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

const crearInversion = async (req, res) => {
  try {
    const nuevaInversion = req.body;
    const inversionCreada = await inversionService.crearInversion(nuevaInversion);
    ResponseStructure.status = 201;
    ResponseStructure.message = "Inversión creada exitosamente";
    ResponseStructure.data = inversionCreada;
    res.status(201).json(ResponseStructure);
  } catch (error) {
    console.error("Error al crear la inversión:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al crear la inversión";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

const modificarInversionPorId = async (req, res) => {
  try {
    const inversionId = req.params.id;
    const nuevosDatos = req.body;
    const inversionModificada = await inversionService.modificarInversionPorId(inversionId, nuevosDatos);
    if (!inversionModificada) {
      ResponseStructure.status = 404;
      ResponseStructure.message = "Inversión no encontrada";
      ResponseStructure.data = null;
    } else {
      ResponseStructure.status = 200;
      ResponseStructure.message = "Inversión modificada exitosamente";
      ResponseStructure.data = inversionModificada;
    }
    res.status(ResponseStructure.status).json(ResponseStructure);
  } catch (error) {
    console.error("Error al modificar la inversión por ID:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al modificar la inversión por ID";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

const eliminarInversionPorId = async (req, res) => {
  try {
    const inversionId = req.params.id;
    const inversionEliminada = await inversionService.eliminarInversionPorId(inversionId);
    if (!inversionEliminada) {
      ResponseStructure.status = 404;
      ResponseStructure.message = "Inversión no encontrada";
      ResponseStructure.data = null;
    } else {
      ResponseStructure.status = 200;
      ResponseStructure.message = "Inversión eliminada exitosamente";
      ResponseStructure.data = inversionEliminada;
    }
    res.status(ResponseStructure.status).json(ResponseStructure);
  } catch (error) {
    console.error("Error al eliminar la inversión por ID:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al eliminar la inversión por ID";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

module.exports = {
  obtenerInversiones,
  obtenerInversionPorId,
  crearInversion,
  modificarInversionPorId,
  eliminarInversionPorId,
};
