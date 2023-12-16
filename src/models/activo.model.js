const { Schema, model } = require("mongoose");

const activoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("Activo", activoSchema, "activo");
