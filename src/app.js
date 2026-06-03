const express = require('express');
const app = express();

// middleware to parse JSON bodies
app.use(express.json());

// routes
const moviesRouter = require('./routes/moviesRoutes');
app.use('/api/movies', moviesRouter);


module.exports = app;