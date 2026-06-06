const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Health route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Simple API example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from DocuFlow backend' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
