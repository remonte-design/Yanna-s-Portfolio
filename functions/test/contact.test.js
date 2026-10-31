const assert = require("node:assert/strict");
const test = require("node:test");
const { createContactHandler, validateContact } = require("../contact");

const validContact = {
  name: "Riyanna Monte",
  email: "visitor@example.com",
  subject: "Portfolio collaboration",
  message: "I would love to work together.",
};

test("validates and trims contact messages", () => {
  const { contact, error } = validateContact({
    name: "  Riya  ",
    email: " visitor@example.com ",
    subject: " Hello ",
    message: " A message ",
  });

  assert.equal(error, undefined);
  assert.deepEqual(contact, {
    name: "Riya",
    email: "visitor@example.com",
    subject: "Hello",
    message: "A message",
  });
});

test("rejects malformed email and header injection", () => {
  assert.match(validateContact({ ...validContact, email: "invalid" }).error, /Check your name/);
  assert.match(
    validateContact({ ...validContact, subject: "Hello\r\nBcc: bad@example.com" }).error,
    /Check your name/,
  );
});

test("sends a valid message and returns a success response", async () => {
  let sentContact;
  const handler = createContactHandler({
    sendContactEmail: async (contact) => {
      sentContact = contact;
    },
  });
  const response = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
  };

  await handler({ method: "POST", body: validContact }, response);

  assert.equal(response.statusCode, 200);
  assert.match(response.payload.message, /sent successfully/);
  assert.deepEqual(sentContact, validContact);
});

test("returns a failure status when delivery fails", async () => {
  const handler = createContactHandler({
    sendContactEmail: async () => {
      throw new Error("SMTP unavailable");
    },
  });
  const response = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    },
  };

  await handler({ method: "POST", body: validContact }, response);

  assert.equal(response.statusCode, 502);
  assert.match(response.payload.error, /could not send/i);
});
