const Inversion = require("../models/inversion.model");

const obtenerInversiones = async () => {
  return await Inversion.find().populate("divisa activo");
};

const obtenerInversionPorId = async (inversionId) => {
  return await Inversion.findById(inversionId).populate("divisa activo");
};

const crearInversion = async (nuevaInversion) => {
  return await Inversion.create(nuevaInversion);
};

const modificarInversionPorId = async (inversionId, nuevosDatos) => {
  return await Inversion.findByIdAndUpdate(inversionId, nuevosDatos, { new: true })
    .populate("divisa activo");
};

const eliminarInversionPorId = async (inversionId) => {
  return await Inversion.findByIdAndDelete(inversionId).populate("divisa activo");
};

module.exports = {
  obtenerInversiones,
  obtenerInversionPorId,
  crearInversion,
  modificarInversionPorId,
  eliminarInversionPorId,
};
