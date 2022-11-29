import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
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

var mailOptions = {
    from: process.env.EMAIL, // sender address (who sends)
    to: process.env.EMAIL_TO, // list of receivers (who receives)
    subject: 'Hola, mi primer correo ', // Subject line
    text: 'Prueba ', // plaintext body
    html: '<h1>Prueba</h1>' // html body
};

try{
    const info  = await transporter.sendMail(mailOptions);
    console.log('Message sent: ' + info.response);
    return info;
} catch(error: Error) {
    return console.log(error);
};
