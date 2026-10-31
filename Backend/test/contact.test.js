const assert = require("node:assert/strict");
const { after, before, test } = require("node:test");
const express = require("express");
const { createContactRouter } = require("../src/routes/contact");
const { createEmailService } = require("../src/services/email");

let server;
let baseUrl;
const receivedMessages = [];

before(async () => {
  const app = express();
  app.use(express.json({ limit: "16kb" }));
  app.use(
    "/api/contact",
    createContactRouter({
      sendContactEmail: async (contact) => {
        receivedMessages.push(contact);
      },
    }),
  );
  server = app.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    server.once("listening", resolve);
    server.once("error", reject);
  });
  baseUrl = `http://127.0.0.1:${server.address().port}/api/contact`;
});

after(async () => {
  if (server) {
    await new Promise((resolve, reject) => {
      server.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("sends a validated contact message through the email service", async () => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Riya",
      email: "visitor@example.com",
      subject: "Portfolio collaboration",
      message: "I would love to work together.",
    }),
  });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    message: "Your message was sent successfully. Thank you!",
  });
  assert.deepEqual(receivedMessages.at(-1), {
    name: "Riya",
    email: "visitor@example.com",
    subject: "Portfolio collaboration",
    message: "I would love to work together.",
  });
});

test("rejects malformed or oversized contact messages", async () => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Riya",
      email: "not-an-email",
      subject: "Hello",
      message: "Message",
    }),
  });

  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /Check your name/);
});

test("reports a delivery failure without claiming the message was sent", async () => {
  const app = express();
  app.use(express.json());
  app.use(
    "/api/contact",
    createContactRouter({
      sendContactEmail: async () => {
        throw new Error("SMTP unavailable");
      },
    }),
  );
  const failingServer = app.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    failingServer.once("listening", resolve);
    failingServer.once("error", reject);
  });

  try {
    const response = await fetch(
      `http://127.0.0.1:${failingServer.address().port}/api/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Riya",
          email: "visitor@example.com",
          subject: "Hello",
          message: "Message",
        }),
      },
    );

    assert.equal(response.status, 502);
    assert.match((await response.json()).error, /could not send/i);
  } finally {
    await new Promise((resolve, reject) => {
      failingServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});

test("reports missing Gmail credentials as an unavailable service", async () => {
  const app = express();
  app.use(express.json());
  app.use(
    "/api/contact",
    createContactRouter({
      sendContactEmail: createEmailService({
        host: "smtp.gmail.com",
        port: 465,
        user: "",
        password: "",
        recipient: "owner@example.com",
      }),
    }),
  );
  const unconfiguredServer = app.listen(0, "127.0.0.1");
  await new Promise((resolve, reject) => {
    unconfiguredServer.once("listening", resolve);
    unconfiguredServer.once("error", reject);
  });

  try {
    const response = await fetch(
      `http://127.0.0.1:${unconfiguredServer.address().port}/api/contact`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Riya",
          email: "visitor@example.com",
          subject: "Hello",
          message: "Message",
        }),
      },
    );

    assert.equal(response.status, 503);
    assert.match((await response.json()).error, /not configured/i);
  } finally {
    await new Promise((resolve, reject) => {
      unconfiguredServer.close((error) => (error ? reject(error) : resolve()));
    });
  }
});
