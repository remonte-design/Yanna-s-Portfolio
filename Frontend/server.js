const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const frontendDirectory = __dirname;
const port = Number(process.env.FRONTEND_PORT || 4173);
const backendPort = Number(process.env.BACKEND_PORT || 3000);
const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

if (!Number.isInteger(port) || port < 1 || port > 65535) {
  throw new Error("FRONTEND_PORT must be a valid TCP port.");
}

if (!Number.isInteger(backendPort) || backendPort < 1 || backendPort > 65535) {
  throw new Error("BACKEND_PORT must be a valid TCP port.");
}

const server = http.createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400);
    response.end("Invalid request path");
    return;
  }

  if (pathname === "/api/contact") {
    if (request.method !== "POST") {
      response.writeHead(405, { Allow: "POST" });
      response.end("Method not allowed");
      return;
    }

    const proxyRequest = http.request(
      {
        hostname: "127.0.0.1",
        port: backendPort,
        path: "/api/contact",
        method: "POST",
        headers: {
          "Content-Type": request.headers["content-type"] || "application/json",
          ...(request.headers["content-length"]
            ? { "Content-Length": request.headers["content-length"] }
            : {}),
        },
      },
      (proxyResponse) => {
        response.writeHead(proxyResponse.statusCode || 502, {
          "Content-Type": proxyResponse.headers["content-type"] || "application/json; charset=utf-8",
        });
        proxyResponse.pipe(response);
      },
    );

    proxyRequest.on("error", (error) => {
      console.error("Contact API proxy failed:", error.message);
      if (!response.headersSent) {
        response.writeHead(503, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({
          error: "Contact service is unavailable. Start the backend and configure email delivery.",
        }));
      } else {
        response.destroy(error);
      }
    });

    request.pipe(proxyRequest);
    return;
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }

  const requestedPath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.resolve(frontendDirectory, `.${requestedPath}`);
  const relativePath = path.relative(frontendDirectory, filePath);

  if (
    relativePath === ".." ||
    relativePath.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relativePath)
  ) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  let fileStats;
  try {
    fileStats = await fs.promises.stat(filePath);
  } catch (error) {
    if (error.code === "ENOENT" || error.code === "ENOTDIR") {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    console.error("Failed to inspect frontend file:", error);
    response.writeHead(500);
    response.end("Unable to read frontend file");
    return;
  }

  if (!fileStats.isFile()) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "Cache-Control": "no-cache",
    "Content-Length": fileStats.size,
    "Content-Type":
      mimeTypes.get(path.extname(filePath).toLowerCase()) || "application/octet-stream",
  });

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  const fileStream = fs.createReadStream(filePath);
  fileStream.on("error", (error) => {
    console.error("Failed to serve frontend file:", error);
    response.destroy(error);
  });
  fileStream.pipe(response);
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Frontend running at http://localhost:${port}`);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    server.close((error) => {
      if (error) {
        console.error("Failed to close the frontend server:", error);
        process.exitCode = 1;
      }
    });
  });
}
