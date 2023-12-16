const Activo = require("../models/activo.model");

const obtenerActivos = async () => {
  return await Activo.find();
};

const obtenerActivoPorId = async (activoId) => {
  return await Activo.findById(activoId);
};

const crearActivo2 = async (nuevoActivo) => {
  return await Activo.create(nuevoActivo);
};

const modificarActivoPorId = async (activoId, nuevosDatos) => {
  return await Activo.findByIdAndUpdate(activoId, nuevosDatos, { new: true });
};

const eliminarActivoPorId = async (activoId) => {
  return await Activo.findByIdAndDelete(activoId);
};

module.exports = {
  obtenerActivos,
  obtenerActivoPorId,
  crearActivo2,
  modificarActivoPorId,
  eliminarActivoPorId,
};
