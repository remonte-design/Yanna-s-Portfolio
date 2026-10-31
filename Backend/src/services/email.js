const nodemailer = require("nodemailer");

function createEmailService(settings) {
  let transporter;

  return async function sendContactEmail({ name, email, subject, message }) {
    if (!settings.user || !settings.password || !settings.recipient) {
      const error = new Error("SMTP credentials and recipient must be configured.");
      error.code = "EMAIL_NOT_CONFIGURED";
      throw error;
    }

    if (!transporter) {
      transporter = nodemailer.createTransport({
        host: settings.host,
        port: settings.port,
        secure: settings.port === 465,
        auth: {
          user: settings.user,
          pass: settings.password,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
      });
    }

    await transporter.sendMail({
      from: {
        name: "Portfolio Contact Form",
        address: settings.user,
      },
      to: settings.recipient,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  };
}

module.exports = { createEmailService };