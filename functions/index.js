const nodemailer = require("nodemailer");
const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { createContactHandler } = require("./contact");

const smtpUser = defineSecret("SMTP_USER");
const smtpPassword = defineSecret("SMTP_PASSWORD");
const contactEmail = defineSecret("CONTACT_EMAIL");

function createMailer() {
  let transporter;

  return async function sendContactEmail({ name, email, subject, message }) {
    const user = smtpUser.value();
    const password = smtpPassword.value();
    const recipient = contactEmail.value();

    if (!user || !password || !recipient) {
      throw new Error("Gmail SMTP secrets are not configured.");
    }

    if (!transporter) {
      transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: { user, pass: password },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
      });
    }

    await transporter.sendMail({
      from: { name: "Portfolio Contact Form", address: user },
      to: recipient,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  };
}

exports.contact = onRequest(
  {
    region: "us-central1",
    maxInstances: 3,
    secrets: [smtpUser, smtpPassword, contactEmail],
  },
  createContactHandler({ sendContactEmail: createMailer() }),
);
