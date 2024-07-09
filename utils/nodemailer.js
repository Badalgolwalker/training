const nodemailer = require("nodemailer");
const Errorhandler = require("./errorhandler");

exports.sendmail = (req, res, next, url) => {
  
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: "badalgolwalkar202@gmail.com",
      pass: "zywc heop keid lgtx" // Ensure this password is correct
    }
  });

  const mailOption = {
    from: "badalgolwalkar202@gmail.com",
    to: req.body.email,
    subject: "kuch bhi",
    html: `<h1>click link below to reset password</h1><a href="${url}">password reset link</a>`
  };
  

  transport.sendMail(mailOption, (err, info) => {
    if (err) return next(new Errorhandler(err, 500));
    // console.log(info);
    return res.status(200).json({ message: "Mail sent successfully", url });
  });
};
