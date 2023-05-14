import 'dotenv/config';
export const MEDIA_PATH = process.env.MEDIA_PATH || "media/animes/";
export const BACKUP_PATH = process.env.BACKUP_PATH || "media/backup/";
export const PORT: number = parseInt(`${process.env.PORT}`) || 3000;
export const HOSTNAME: string = process.env.HOSTNAME || "localhost";
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
export const OPTIONS_EMAIL = Object.freeze({
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
});
export const backupJSONFiles = ["media_animes", "anime_generes", "anime_temporadas", "anime_favorites", "seasions", "episodes", "seasions_episodes", "media_episodes", "clips", "episode_collections", "openings", "seasions_openings", "media_openings", "endings", "seasions_endings", "media_endings"];

export const KIND_VALIDS = Object.freeze({
    animebackup:'animebackup',
    banner:'banner',
    portada:'portada',
    openings:'openings',
    endings:'endings',
    episodes:'episodes',
    personages:'personages',
    profiles:'profiles',
    new_post:'new_post',
    chat:'chat'
});
