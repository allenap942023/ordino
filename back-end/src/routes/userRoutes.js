const express = require("express");

const router = express.Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/Usuarios')

const JWT_SECRET = process.env.JWT_SECRET || '12345'; 

function generarToken(usuario) {
    return jwt.sign({ id: usuario._id, rol: usuario.rol }, JWT_SECRET, { expiresIn: '24h' });
}

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

// Crear usuario (POST)
router.post('/usuarios', /* controlador para crear usuario */);

// Leer usuarios (GET)
router.get('/usuarios', verificarToken, async (req, res) => {
    try {
        // Obtener todos los usuarios. Puedes decidir qué campos excluir en la consulta.
        const usuarios = await User.find({}, '-password'); // Excluye la contraseña en el resultado
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({mensaje:'Error en el servidor.'});
    }
});

// Leer un usuario específico (GET)
router.get('/usuarios/:id', verificarToken, async (req, res) => {
    try {
        var {id} = req.params
        // Obtener todos los usuarios. Puedes decidir qué campos excluir en la consulta.
        const usuarios = await User.findOne({_id:id}, '-password'); // Excluye la contraseña en el resultado
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({mensaje:'Error en el servidor.'});
    }
});

// Actualizar usuario (PUT)
router.put('/usuarios/:id', verificarToken, /* controlador para actualizar un usuario */);

// Eliminar usuario (DELETE)
router.delete('/usuarios/:id', verificarToken, /* controlador para eliminar un usuario */);


// Login (POST)
router.post('/login', async (req, res) => {
    try {
        // console.log(req.body);
        const { username, password } = req.body;

        // Buscar usuario por correo electrónico
        const usuario = await User.findOne({ username });
        if (!usuario) {
            return res.status(401).send({ mensaje:'El usuario no existe.'});
        }

        // Verificar contraseña
        const esValida = await bcrypt.compare(password, usuario.password);
        if (!esValida) {
            return res.status(401).send({ mensaje: 'Contrasena incorrecta.'});
        }

        // Generar token JWT
        const token = jwt.sign({ id: usuario._id }, JWT_SECRET, { expiresIn: '24h' });

        res.send({ mensaje: 'Login exitoso', token , _id:usuario._id});
    } catch (error) {
        console.error('ERROR:', error);
        res.status(500).json({ mensaje: 'Error al iniciar sesion' });
    }
});

// Logout (POST)
router.post('/logout', (req, res) => {
    // El logout generalmente se maneja en el cliente eliminando el token almacenado
    res.send('Logout exitoso');
});

module.exports = router;
