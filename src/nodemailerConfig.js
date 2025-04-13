const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'athirahahmadfauzi@gmail.com',
        pass: 'Ath!rah123456789'
    }
});

module.exports = transporter;
