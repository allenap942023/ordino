const mongoose = require('mongoose');

const historialMedicoSchema = new mongoose.Schema({
  // En MongoDB, _id se genera automáticamente y puede usarse como PK
  id_paciente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Paciente',
    required: true // FK a la colección de Pacientes
  },
  fecha_consulta: {
    type: Date,
    required: true
  },
  sintomas: {
    type: String,
    required: true,
    maxlength: 300 // VARCHAR(300)
  },
  diagnostico: {
    type: String,
    required: true,
    maxlength: 300 // VARCHAR(300)
  },
  tratamiento: {
    type: String,
    required: true,
    maxlength: 300 // VARCHAR(300)
  }
  // ... más campos según sea necesario ...
});

module.exports = mongoose.model('HistorialMedico', historialMedicoSchema);
