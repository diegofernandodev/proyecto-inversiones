const { ResponseStructure } = require("../helpers/ResponseStructure");
const { crearActivo2 } = require("../services/activo.service");
const activoController={}

const obtenerActivos = async (req, res) => {
  try {
    const activos = await activoService.obtenerActivos();
    ResponseStructure.status = 200;
    ResponseStructure.message = "Activos obtenidos exitosamente";
    ResponseStructure.data = activos;
    res.status(200).json(ResponseStructure);
  } catch (error) {
    console.error("Error al obtener los activos:", error);
    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al obtener los activos";
    ResponseStructure.data = {
      error: error.message,
    };
    res.status(500).json(ResponseStructure);
  }
};

const obtenerActivoPorId = async (req, res) => {
    try {
      const activoId = req.params.id;
      const activo = await activoService.obtenerdivisaPorId(activoId);
      if (!activo) {
        ResponseStructure.status = 404;
        ResponseStructure.message = "Activo no encontrado";
        ResponseStructure.data = null;
      } else {
        ResponseStructure.status = 200;
        ResponseStructure.message = "divisa obtenida exitosamente";
        ResponseStructure.data = activo;
      }
      res.status(ResponseStructure.status).json(ResponseStructure);
    } catch (error) {
      console.error("Error al obtener el activo por ID:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al obtener el activo por ID";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };
  
  const crearActivo = async (req, res) => {
    try {
      console.log(req.body);
      const nuevoActivo = req.body;
      const activoCreado = await crearActivo2(nuevoActivo);
      // ResponseStructure.status = 201;
      ResponseStructure.message = "Activo creado exitosamente";
      ResponseStructure.data = activoCreado;
      res.status(201).json(ResponseStructure);
    } catch (error) {
      console.error("Error al crear el activo:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al crear el activo";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };
  
  const modificarActivoPorId = async (req, res) => {
    try {
      const activoId = req.params.id;
      const nuevosDatos = req.body;
      const activoModificado = await divisaService.modificarDivisaPorId(activoId, nuevosDatos);
      if (!activoModificado) {
        ResponseStructure.status = 404;
        ResponseStructure.message = "Activo no encontrado";
        ResponseStructure.data = null;
      } else {
        ResponseStructure.status = 200;
        ResponseStructure.message = "Activo modificado exitosamente";
        ResponseStructure.data = activoModificado;
      }
      res.status(ResponseStructure.status).json(ResponseStructure);
    } catch (error) {
      console.error("Error al modificar el activo por ID:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al modificar el activo por ID";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };
  
  const eliminarActivoPorId = async (req, res) => {
    try {
      const activoId = req.params.id;
      const activoEliminado = await divisaService.eliminarDivisaPorId(activoId);
      if (!activoEliminado) {
        ResponseStructure.status = 404;
        ResponseStructure.message = "Activo no encontrado";
        ResponseStructure.data = null;
      } else {
        ResponseStructure.status = 200;
        ResponseStructure.message = "Activo eliminado exitosamente";
        ResponseStructure.data = activoEliminado;
      }
      res.status(ResponseStructure.status).json(ResponseStructure);
    } catch (error) {
      console.error("Error al eliminar el activo por ID:", error);
      ResponseStructure.status = 500;
      ResponseStructure.message = "Error al eliminar el activo por ID";
      ResponseStructure.data = {
        error: error.message,
      };
      res.status(500).json(ResponseStructure);
    }
  };

module.exports = {
  obtenerActivos,
  obtenerActivoPorId,
  crearActivo,
  modificarActivoPorId,
  eliminarActivoPorId
};
