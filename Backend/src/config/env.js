const path = require("node:path");
const dotenv = require("dotenv");
const fs = require("node:fs");

const projectEnvPath = path.resolve(__dirname, "../../../.env");
const backendEnvPath = path.resolve(__dirname, "../../.env");
const envPath = fs.existsSync(projectEnvPath) ? projectEnvPath : backendEnvPath;

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
}

const requiredEnvironmentVariables = ["MYSQL_DATABASE", "MYSQL_USER"];
const missingEnvironmentVariables = requiredEnvironmentVariables.filter(
  (name) => !process.env[name],
);

if (missingEnvironmentVariables.length > 0) {
  throw new Error(
    [
      `Missing required environment variables: ${missingEnvironmentVariables.join(", ")}.`,
      "Copy .env.example to .env in the project root or Backend folder, then set your MySQL database and user.",
      "Example from the Backend folder: copy .env.example .env",
    ].join("\n"),
  );
}

const port = Number(process.env.PORT || 3000);
const mysqlPort = Number(process.env.MYSQL_PORT || 3306);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("PORT must be a valid TCP port.");
}

if (!Number.isInteger(mysqlPort) || mysqlPort < 1 || mysqlPort > 65535) {
  throw new Error("MYSQL_PORT must be a valid TCP port.");
}

const settings = {
  port,
  mysql: {
    host: process.env.MYSQL_HOST || "localhost",
    port: mysqlPort,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD || "",
    database: process.env.MYSQL_DATABASE,
  },
};

module.exports = { settings };
