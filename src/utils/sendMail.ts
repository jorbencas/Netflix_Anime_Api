export const optionsEmail = {
    service:String(process.env.EMAIL_HOSTNAME), // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: String(process.env.EMAIL),
        pass: String(process.env.EMAIL_PASSWD)
    }
};

export const makerMail = (subject: string = '', text:string = '', html:string = '')  => {
 return {
    from: String(process.env.EMAIL), // sender address (who sends)
    to: String(process.env.EMAIL_TO), // list of receivers (who receives),
    subject,
    text,
    html
}
};
