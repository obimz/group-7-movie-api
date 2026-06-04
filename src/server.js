require('dotenv').config();
const app = require('./app');
const express = require('express');

app.use(express.json());

let movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        releaseYear: 2010,
        rating: 8.8
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        releaseYear: 2008,
        rating: 9.0
    },
    {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        releaseYear: 2014,
        rating: 8.6
    },
];

app.get('/movies', (req, res) => {
    res.status(200).json(movies);
});

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const movie = movies.find((m) => m.id === Number(id));
  if (!movie) {
    return res.status(404).json({
      message: `Movie with ID ${id} not found`,
    });
  }
  res.status(200).json(movie);
});

app.post('/movies', (req, res) => {
  const newMovie = { id: movies.length + 1, ...req.body};
  movies.push(newMovie);
  if(!newMovie.task) {
    return res.status(400).json({
      error: 'Task is required',
    });
  }
  res.status(201).json(newMovie);
});

app.patch('/movies/:id', (req, res) => {
  const movie = movies.find(m => m.id ===parseInt(req.params.id));
  if (!movie) {
    return res.status(404).json({
      message: `Movie with ID ${req.params.id} not found`,
    });
  }
  Object.assign(movie, req.body);
  res.status(200).json(movie);
});

app.delete('/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initiallength = movies.length;
  movies = movies.filter(m => m.id !== id);
  if (movies.length === initiallength) {
    return res.status(404).json({
      error: `Movie with ID ${id} not found`,
    });
  }
  res.status(200).json({
    message: 'Movie deleted successfully',
    movie: deletedMovie
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



