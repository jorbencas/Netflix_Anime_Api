import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import moment from 'moment';

// Función para generar un hash SHA-512 de un texto
function generateHash(text: string): string {
    const hash = crypto.createHash('sha512');
    hash.update(text);
    return hash.digest('hex');
}

// Función para generar un token JWT con un tiempo de expiración
function generateToken(data: any, secretKey: string, expiresIn: string): string {
    return jwt.sign(data, secretKey, { expiresIn });
}

// Función para verificar y decodificar un token JWT
function verifyToken(token: string, secretKey: string): any {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        console.error('Error al verificar el token:', err);
        return null;
    }
}

*
// Generar un texto aleatorio
const randomText = 'Texto aleatorio para generar el hash y el token';

// Generar un hash SHA-512 del texto aleatorio
const hash = generateHash(randomText);
console.log('Hash SHA-512:', hash);

// Clave secreta para firmar el token (debería ser generada de forma segura)
export const SECRET_KEY = "Este es una api que tiene la función principal de gestionar "; // Cambiar a una clave segura en un entorno de producción

// Tiempo de expiración del token (28 días)
const expirationDate = moment().add(28, 'days').toDate();
const expiresIn = expirationDate.toISOString();

// Generar un token JWT que expire en 28 días
const tk = generateToken({ hash }, SECRET_KEY, expiresIn);
console.log('Token JWT:', tk);

// Verificar y decodificar el token JWT
const decodedToken = verifyToken(tk, SECRET_KEY);
if (decodedToken) {
    console.log('Token decodificado:', decodedToken);
    console.log('El hash del token es válido:', decodedToken.hash === hash);
} else {
    console.log('El token no es válido.');
}
