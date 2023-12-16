const Divisa = require("../models/divisa.model");

const obtenerDivisas = async () => {
  return await Divisa.find();
};

const obtenerDivisaPorId = async (divisaId) => {
  return await Divisa.findById(divisaId);
};

const crearDivisa = async (nuevaDivisa) => {
  return await Divisa.create(nuevaDivisa);
};

const modificarDivisaPorId = async (divisaId, nuevosDatos) => {
  return await Divisa.findByIdAndUpdate(divisaId, nuevosDatos, { new: true });
};

const eliminarDivisaPorId = async (divisaId) => {
  return await Divisa.findByIdAndDelete(divisaId);
};

module.exports = {
  obtenerDivisas,
  obtenerDivisaPorId,
  crearDivisa,
  modificarDivisaPorId,
  eliminarDivisaPorId,
};
