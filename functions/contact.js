const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { error: "Enter your contact details and message." };
  }

  const { name, email, subject, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return { error: "All contact fields are required." };
  }

  const contact = {
    name: name.trim(),
    email: email.trim(),
    subject: subject.trim(),
    message: message.trim(),
  };

  if (
    !contact.name ||
    contact.name.length > 100 ||
    /[\r\n]/.test(contact.name) ||
    !EMAIL_PATTERN.test(contact.email) ||
    contact.email.length > 254 ||
    !contact.subject ||
    contact.subject.length > 150 ||
    /[\r\n]/.test(contact.subject) ||
    !contact.message ||
    contact.message.length > 5000
  ) {
    return {
      error: "Check your name, email, subject, and message, then try again.",
    };
  }

  return { contact };
}

function createContactHandler({ sendContactEmail }) {
  if (typeof sendContactEmail !== "function") {
    throw new TypeError("A contact email service is required.");
  }

  return async function handleContact(request, response) {
    if (request.method !== "POST") {
      response.set("Allow", "POST").status(405).json({
        error: "Method not allowed.",
      });
      return;
    }

    const { contact, error } = validateContact(request.body);
    if (error) {
      response.status(400).json({ error });
      return;
    }

    try {
      await sendContactEmail(contact);
      response.status(200).json({
        message: "Your message was sent successfully. Thank you!",
      });
    } catch (sendError) {
      console.error(
        "Contact email delivery failed:",
        sendError instanceof Error ? sendError.message : sendError,
      );
      response.status(502).json({
        error: "We could not send your message right now. Please try again later.",
      });
    }
  };
}

module.exports = { createContactHandler, validateContact };
