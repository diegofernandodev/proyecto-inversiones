const { Schema, model } = require("mongoose");

const inversionSchema = new Schema({
  monto: {
    type: Number,
    required: [true, "El monto es requerido"],
    validate: {
      validator: (value) => {
        return typeof value === "number";
      },
      message: "El monto debe ser un valor numerico",
    },
    min: [100000, "El monto debe ser superior cien mil pesos"],
    max: [50000000, "El monto debe ser inferior a cincuenta millones de pesos"],
  },
  divisa: {
    type: Schema.Types.ObjectId,
    ref: "Divisa",
    required: [true, 'La divisa es requerida'],
  },
  activo: {
    type: Schema.Types.ObjectId,
    ref: "Activo",
    required: [true, 'El activo es requerido'],
  },
  fecha: {
    type: Date,
    required: [true, "La fecha es requerida"],
    validate: {
      validator: (value) => {
         return value instanceof Date;
      },
      message: "La fecha debe ser una cadena de tipo Date",
    },
  }
  
});

module.exports = model("Inversion", inversionSchema, "inversion");
