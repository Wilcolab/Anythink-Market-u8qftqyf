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

// In-memory tasks storage
let tasks = [
  "Write a diary entry from the future",
  "Create a time machine from a cardboard box", 
  "Plan a trip to the dinosaurs",
  "Draw a futuristic city",
  "List items to bring on a time-travel adventure"
];

// Routes
// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json({ tasks: tasks });
});

// Add a new task
app.post('/tasks', (req, res) => {
  const { text } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Task text is required' });
  }
  
  tasks.push(text);
  res.json({ message: 'Task added successfully' });
});

// Server startup
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server started at: ${new Date().toISOString()}`);
});

module.exports = app;
