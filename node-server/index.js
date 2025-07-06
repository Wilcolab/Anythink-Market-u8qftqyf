const express = require('express');

const app = express();
const PORT = 8001;

// Middleware for parsing JSON
app.use(express.json());

// Basic middleware for logging requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Server startup
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server started at: ${new Date().toISOString()}`);
});

module.exports = app;
