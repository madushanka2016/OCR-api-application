const nodemailer = require('nodemailer');
const verifyToken = require('../tokens/emailVerifyToken');
const sendEmail = (req , res , next) => {
    const emailVerifyToken = verifyToken(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'pasanmalinda10@gmail.com',
            pass: 'waelljkvsekbyeif'
        }
    });
    var mailOptions = {
        from: 'pasanmlinda10@gmail.com',
        to: req.body.email,
        subject: 'Welcome to OCR System',
        text: `
Hello ${req.body.name}
https://ocr-system.herokuapp.com/user/verify/${emailVerifyToken}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
          return res.json({"Status":"error","StatusDetails":error});
        }else if(info){
          return res.json({"Status":"success","StatusDetails":"successful create account.Check your email"});
        }else{
          return res.json({"Status":"error","StatusDetails":"fail"});
        }
      });
}

module.exports = sendEmail;


