const express = require('express');
const router = express.Router();
const movies = require('../data/movies');

// Get the list of movies
router.get('/', (req, res) => {
    res.status(200).json(movies);
});

// Get a single movie by ID
router.get('/:id', (req, res) => {
    const movie = movies.find((m) => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.status(200).json(movie);
});

// Add a new movie using POST
router.post('/', (req, res) => {
    const { title, genre, releaseYear, rating } = req.body;
    if (!title || !genre || !releaseYear || !rating || title.trim() === '' || genre.trim() === '' || isNaN(releaseYear) || isNaN(rating)) {
        return res.status(400).json({ message: 'Please provide title, genre, releaseYear and rating' });
    }
    const newMovie = { id: movies.length + 1, title, genre, releaseYear, rating };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// Update an existing movie using PATCH
router.patch('/:id', (req, res) => {
    const movie = movies.find((m) => m.id === parseInt(req.params.id));
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    Object.assign(movie, req.body);
    res.status(200).json(movie);
});

// Replace an existing movie using PUT
router.put('/:id', (req, res) => {
    const movie = movies.findIndex((m) => m.id === parseInt(req.params.id));
    if (movie === -1) return res.status(404).json({ message: 'Movie not found' });
    const { title, genre, releaseYear, rating } = req.body;
    if (!title || !genre || !releaseYear || !rating || title.trim() === '' || genre.trim() === '' || isNaN(releaseYear) || isNaN(rating)) {
        return res.status(400).json({ message: 'Please provide title, genre, releaseYear and rating' });
    }
    movies[movie] = { id: movies[movie].id, title, genre, releaseYear, rating };
    res.status(200).json(movies[movie]);
});

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = movies.findIndex((m) => m.id === id);
    if (index === -1) return res.status(404).json({ message: 'Movie not found' });
    movies.splice(index, 1);
    res.status(200).json({ message: 'Movie deleted successfully' });
});


module.exports = router;