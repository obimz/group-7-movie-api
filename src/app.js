const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const requestLogger = require('./middleware/logger');
const globalErrorHandler = require('./middleware/errorHandler');

const moviesRoutes = require('./routes/moviesRoutes');
const app = express();
exports.app = app;

// secure app headers
app.use(helmet());

// enable cors
app.use(cors());

// parse incoming request JSON bodies
app.use(express.json());

// log incoming request metadata
app.use(requestLogger);

// mount main routers
app.use('/movies', moviesRoutes);

// handler 404 resources
app.use((req, res, next) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

// centralized error handling middleware
app.use(globalErrorHandler);

module.exports = app;
