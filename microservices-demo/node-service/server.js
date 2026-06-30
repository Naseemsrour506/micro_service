const express = require("express");

const app = express();

const PORT = 5000;

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || "http://localhost:5001";
const DOTNET_SERVICE_URL = process.env.DOTNET_SERVICE_URL || "http://localhost:5002";
app.get("/", (req, res) => {
  res.json({
    service: "node-service",
    message: "Hello from Node.js Express"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.get("/api/all", async (req, res) => {
  try {
    const pythonResponse = await fetch(`${PYTHON_SERVICE_URL}/`);
    const dotnetResponse = await fetch(`${DOTNET_SERVICE_URL}/`);

    const pythonData = await pythonResponse.json();
    const dotnetData = await dotnetResponse.json();

    res.json({
      service: "node-service",
      message: "Node called Python and .NET successfully",
      python: pythonData,
      dotnet: dotnetData
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to call one of the services",
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Node service is running on http://localhost:${PORT}`);
});