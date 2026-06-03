require('dotenv').config();
const express = require('express');
const app = express();

//middleware to parse JSON bodies
app.use(express.json());

//routes
const moviesRouter = require('./routes/movies');
app.use('/api/movies', moviesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

