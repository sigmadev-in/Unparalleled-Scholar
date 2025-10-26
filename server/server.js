// Unparalleled Scholar - Main Server File
// Project Code Name: US.V1
// Built by Srijan Kumar | Srijanxi Technologies

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const { limiter, apiLimiter, validateInput } = require('./middleware/security');

const app = express();
const PORT = process.env.PORT || 3000;

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com", "https://cdn.jsdelivr.net", "https://unpkg.com"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com", "https://unpkg.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https:", "data:"],
    },
  },
}));
app.use(limiter); // Apply rate limiting globally
app.use(validateInput); // Validate all inputs

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from client and src directories
app.use('/client', express.static(path.join(__dirname, '../client')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));
app.use('/pages', express.static(path.join(__dirname, '../src/pages')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Serve pages
app.get('/pages/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/pages/contact.html'));
});

app.get('/pages/courses.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/pages/courses.html'));
});

// API Routes (with stricter rate limiting)
app.use('/api/students', apiLimiter, require('./routes/students'));
app.use('/api/courses', apiLimiter, require('./routes/courses'));
app.use('/api/contact', apiLimiter, require('./routes/contact'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Unparalleled Scholar API is running',
    version: '1.0.0',
    project: 'US.V1'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    message: 'The requested resource does not exist'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════════════════════╗
  ║                                                           ║
  ║        🎓 UNPARALLELED SCHOLAR - API SERVER 🎓           ║
  ║                                                           ║
  ║        Project: US.V1                                     ║
  ║        Server running on port ${PORT}                     ║
  ║     Environment: ${process.env.NODE_ENV || 'development'} ║
  ║                                                           ║
  ║        Built by Srijan | Srijanxi Technologies            ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
  `);
  console.log(`🌐 Access the application at: http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;
