import 'dotenv/config';
export const MEDIA_PATH = process.env.MEDIA_PATH;
export const PORT: number = parseInt(`${process.env.PORT}`) || 0;
export const HOSTNAME: string = process.env.HOSTNAME || "127.0.0.1";
const EMAIL_HOSTNAME = String(process.env.EMAIL_HOSTNAME);
export const EMAIL = String(process.env.EMAIL);
const EMAIL_PASSWD = String(process.env.EMAIL_PASSWD);
export const EMAIL_TO = String(process.env.EMAIL_TO);
export const MONGODB_URI = String(process.env.MONGODB_URI);
export const API_TOKEN = String(process.env.API_TOKEN);
export const POSTGRES_HOST = String(process.env.POSTGRES_HOST);
export const POSTGRES_USER = String(process.env.POSTGRES_USER);
export const POSTGRES_PASSWORD = String(process.env.POSTGRES_PASSWORD);
export const POSTGRES_PORT: number = parseInt(`${process.env.POSTGRES_PORT}`);
export const OPTIONS_EMAIL = {
    host:EMAIL_HOSTNAME, // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: EMAIL,
        pass: EMAIL_PASSWD
    }
};