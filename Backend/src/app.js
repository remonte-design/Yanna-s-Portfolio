const express = require("express");
const path = require("node:path");
const { createHealthRouter } = require("./routes/health");
const { createContactRouter } = require("./routes/contact");

function createApp({ pool, sendContactEmail }) {
  const app = express();
  const frontendDirectory = path.resolve(__dirname, "../../Frontend");

  app.use(express.json({ limit: "16kb" }));
  app.use("/api/health", createHealthRouter({ pool }));
  app.use("/api/contact", createContactRouter({ sendContactEmail }));
  app.use(express.static(frontendDirectory));

  return app;
}

module.exports = { createApp };
