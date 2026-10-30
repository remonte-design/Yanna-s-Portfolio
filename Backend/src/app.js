const express = require("express");
const path = require("node:path");
const { createHealthRouter } = require("./routes/health");

function createApp({ pool }) {
  const app = express();
  const frontendDirectory = path.resolve(__dirname, "../../Frontend");

  app.use("/api/health", createHealthRouter({ pool }));
  app.use(express.static(frontendDirectory));

  return app;
}

module.exports = { createApp };
