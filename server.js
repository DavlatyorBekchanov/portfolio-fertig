const express = require("express");
const path = require("path");
const app = express();

// Add logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist/portfolio/browser")));

// For all other routes, serve the index.html file
app.get("*", (req, res) => {
  console.log("Serving index.html for route:", req.url);
  res.sendFile(path.join(__dirname, "dist/portfolio/browser", "index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Try accessing: http://localhost:${port}`);
});
