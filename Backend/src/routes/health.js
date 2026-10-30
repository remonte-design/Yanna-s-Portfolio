const express = require("express");

function createHealthRouter({ pool }) {
  const router = express.Router();

  router.get("/", async (_request, response) => {
    try {
      await pool.query("SELECT 1");
      response.json({ status: "ok", database: "connected" });
    } catch (error) {
      console.error("MySQL health check failed:", error.message);
      response.status(503).json({
        status: "error",
        error: "Could not connect to MySQL. Check the server and database settings.",
      });
    }
  });

  return router;
}

module.exports = { createHealthRouter };
