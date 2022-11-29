import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOSTNAME, // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWD
    }
});

export const mailOptions = {
    from: process.env.EMAIL, // sender address (who sends)
    to: process.env.EMAIL_TO // list of receivers (who receives)
};
