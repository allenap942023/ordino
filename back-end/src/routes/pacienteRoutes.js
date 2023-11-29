const express = require("express");

const router = express.Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const Paciente = require('../models/Paciente');

const JWT_SECRET = process.env.JWT_SECRET || '12345'; 



function verificarToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) return res.status(403).send('Token requerido.');

    try {
        
        var token2 = token.split(' ')[2]
        const decoded = jwt.verify(token2, JWT_SECRET);
        req.usuario = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Token inválido.');
    }
}

// Asegúrate de importar y usar tus controladores y middlewares adecuados aquí

// Crear paciente (POST)
router.post('/pacientes',verificarToken, async (req,res)=>{

    const {  nombre,
        fecha_nacimiento,
        dui_paciente,
        sexo_paciente,
        direccion,
        numero_telefonico,
        correo,
        emergencyContact,
        antecedentes,foto
      }= req.body; 

      var nuevo_paciente = Paciente({
        nombre,
        fecha_nacimiento,   
        dui_paciente,
        sexo_paciente,
        direccion,
        numero_telefonico,
        correo,
        emergencyContact,
        antecedentes,foto
    });
    let output;
    output = await nuevo_paciente.save();
        if (!output) {
            res.status(500).json({mensaje:"Error al crear el objeto:", err});
        }
        res.json({mensaje:"Paciente guardado correctamente!"});
      
    
});

// Leer pacientes (GET)
router.get('/pacientes', verificarToken, async (req, res) => {
    try {
        // Obtener todos los pacientes. Puedes decidir qué campos excluir en la consulta.

        var {nombre} =req.body; 
        const pacientes = await Paciente.find({}); 
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({mensaje:'Error en el servidor.'});
    }
});

// Leer un usuario específico (GET)
router.get('/pacientes/:id', verificarToken, async (req, res) => {
    try {
        var {id} = req.params
        // Obtener todos los pacientes. Puedes decidir qué campos excluir en la consulta.
        const pacientes = await User.findOne({_id:id}, '-password'); // Excluye la contraseña en el resultado
        res.json(pacientes);
    } catch (error) {
        res.status(500).json({mensaje:'Error en el servidor.'});
    }
});

// Actualizar usuario (PUT)
router.put('/pacientes/:id', verificarToken, /* controlador para actualizar un usuario */);

// Eliminar usuario (DELETE)
router.delete('/pacientes/:id', verificarToken, /* controlador para eliminar un usuario */);



module.exports = router;
