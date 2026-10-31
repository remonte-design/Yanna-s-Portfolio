const { settings } = require("./config/env");
const { pool } = require("./config/database");
const { createApp } = require("./app");

const app = createApp({ pool });
const server = app.listen(settings.port, () => {
  console.log(`Server running at http://localhost:${settings.port}`);
});

function shutDown() {
  server.close(() => {
    pool.end().then(() => process.exit(0)).catch((error) => {
      console.error("Failed to close the MySQL connection pool:", error);
      process.exit(1);
    });
  });
}

process.on("SIGINT", shutDown);
process.on("SIGTERM", shutDown);
