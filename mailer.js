const nodemailer = require('nodemailer');

// Configure o transporte SMTP (exemplo com Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Defina no .env
    pass: process.env.EMAIL_PASS  // Defina no .env
  }
});

async function sendMail({ to, subject, text, html }) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html
  };
  return transporter.sendMail(mailOptions);
}

exports.default = sendMail;
