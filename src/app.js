console.log('server started');

const express = require('express');
const app = express();
const logger = require('./middleware/logger');


// Use custom logger middleware
app.use(logger);
// middleware to parse JSON bodies
app.use(express.json());


// routes
const moviesRouter = require('./routes/moviesRoutes');
app.use('/api/movies', moviesRouter);


module.exports = app;