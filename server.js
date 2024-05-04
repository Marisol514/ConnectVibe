const express = require('express');
const connectDB = require('./config/connection');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3001;  // Use environment variable with a default fallback

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', apiRoutes);

// Connect to MongoDB and start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log('📦 MongoDB connected...');
  });
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Handle 404 responses for undefined routes
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);  // Log error stack for debugging
    res.status(500).send('Something broke!');  // Send generic error message to client
});


