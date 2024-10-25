import { Request, Response, NextFunction } from 'express';
import { API_TOKEN } from '../config';
import { responseCustome } from "../utils/index";
import { isLocalHost } from '../utils/validators';

export default (req: Request, res: Response, next: NextFunction) => {
  if (
    !isLocalHost(req) &&
    (typeof req.headers.authorization == "undefined" ||
      req.headers.authorization !== API_TOKEN)
  ) {
    let message = `No estas autorizado para utilizar la api de cosas de anime`;
    let s = 401;
    res.status(s).json(responseCustome(message, s));
  } else {
    next();
  }
};





const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const SECRET_KEY = 'mi_clave_secreta'; // Cambia esto por una clave secreta fuerte

// Middleware para verificar el token
function verificarToken(req, res, next) {
    const token = req.headers['authorization']; // Obtener token del encabezado Authorization

    if (!token) {
        return res.status(403).send({ mensaje: 'No token provided.' });
    }

    // Verifica si el token es válido
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send({ mensaje: 'Token inválido o expirado.' });
        }

        // Si el token es válido, decodificamos el payload y lo añadimos a la solicitud
        req.user = decoded;
        next(); // Continúa con la solicitud
    });
}

// Ruta protegida
app.get('/ruta-protegida', verificarToken, (req, res) => {
    res.json({
        mensaje: 'Acceso permitido a la ruta protegida',
        user: req.user // Información del usuario obtenida del token
    });
});

// Generar token (ejemplo de login o autenticación)
app.post('/login', (req, res) => {
    const usuario = { id: 1, nombre: 'Juan Pérez' }; // Simulación de un usuario autenticado

    // Generar un token con los datos del usuario
    const token = jwt.sign(usuario, SECRET_KEY, { expiresIn: '1h' }); // Token válido por 1 hora

    res.json({
        mensaje: 'Usuario autenticado con éxito',
        token: token
    });
});

// Función para regenerar token (por ejemplo, cuando está cerca de expirar)
app.post('/regenerar-token', verificarToken, (req, res) => {
    const usuario = req.user; // Información del usuario del token actual

    // Generar un nuevo token
    const nuevoToken = jwt.sign(usuario, SECRET_KEY, { expiresIn: '1h' }); // Válido por 1 hora más

    res.json({
        mensaje: 'Token regenerado con éxito',
        token: nuevoToken
    });
});