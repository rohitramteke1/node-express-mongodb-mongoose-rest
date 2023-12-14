const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    
    try {
        let testAccount = await nodemailer.createTestAccount();

        // connect with smtp server (ethereal.email)
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'mireya.padberg99@ethereal.email',
                pass: 'NJmRzrjnGHTEZ5avcY'
            }
        });
    
        // our message to user
        const info =  await transporter.sendMail( {
            from: 'Mireya Padberg "<roit@ramteke>" ',
            to: 'pc@gmail.com',
            subject: 'im watching you.',
            text: 'Hello pc@kai',
            html: '<b>Hello PC@Kai</b>',
        });
        console.log('Message sent: %s', info.messageId);
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
        res.json(info);
    }

    catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email.');
    }
}

module.exports = sendMail;