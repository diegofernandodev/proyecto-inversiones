const { Schema, model } = require("mongoose");

const divisaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
 });

module.exports = model("Divisa", divisaSchema,"divisa");
