const express = require("express");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function createContactRouter({ sendContactEmail }) {
  if (typeof sendContactEmail !== "function") {
    throw new TypeError("A contact email service is required.");
  }

  const router = express.Router();
  const requestsByIp = new Map();

  router.post("/", async (request, response) => {
    const now = Date.now();
    const requestCount = requestsByIp.get(request.ip);
    if (!requestCount || now - requestCount.startedAt >= RATE_LIMIT_WINDOW_MS) {
      requestsByIp.set(request.ip, { startedAt: now, count: 1 });
    } else if (requestCount.count >= MAX_REQUESTS_PER_WINDOW) {
      response.status(429).json({
        error: "Too many messages were submitted. Please wait before trying again.",
      });
      return;
    } else {
      requestCount.count += 1;
    }

    if (requestsByIp.size > 1000) {
      for (const [ip, entry] of requestsByIp) {
        if (now - entry.startedAt >= RATE_LIMIT_WINDOW_MS) {
          requestsByIp.delete(ip);
        }
      }
    }

    const body = request.body;
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      response.status(400).json({ error: "Enter your contact details and message." });
      return;
    }

    const { name, email, subject, message } = body;
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      response.status(400).json({ error: "All contact fields are required." });
      return;
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
      response.status(400).json({
        error: "Check your name, email, subject, and message, then try again.",
      });
      return;
    }

    try {
      await sendContactEmail(contact);
      response.json({ message: "Your message was sent successfully. Thank you!" });
    } catch (error) {
      if (error && error.code === "EMAIL_NOT_CONFIGURED") {
        response.status(503).json({
          error: "Email delivery is not configured yet. Please try again later.",
        });
        return;
      }

      console.error("Contact email delivery failed:", error instanceof Error ? error.message : error);
      response.status(502).json({
        error: "We could not send your message right now. Please try again later.",
      });
    }
  });

  return router;
}

module.exports = { createContactRouter };
