const movies = require('../data/movies');
/**
 * Controller: moviesController
 * Purpose: Handles incoming HTTP requests for movie CRUD endpoints.
 *
 * INSTRUCTIONS FOR IMPLEMENTORS:
 * 1. Import the in-memory database helper methods from '../data/moviesData'.
 *    - Example: const moviesData = require('../data/moviesData');
 * 2. Implement the functions below and export them at the bottom of this file.
 * 3. Make sure to call next(error) inside catch blocks to pass errors to the global error handler.
 */

// TODO: Import moviesData module here

/**
 * Task 16, 18, 19: Get all movies (supports filtering by genre & sorting by year/rating)
 *
 * How to implement:
 * - Retrieve all movies by calling moviesData.getAllMovies().
 * - Get query parameters from the request: `const { genre, sortBy } = req.query;`
 * - IF `genre` is provided:
 *   - Filter movies array case-insensitively (e.g. movie.genre.toLowerCase() === genre.toLowerCase()).
 * - IF `sortBy` is provided:
 *   - If sortBy is 'year', sort movies by `releaseYear` ascending/descending.
 *   - If sortBy is 'rating', sort movies by `rating` descending.
 * - Return the resulting array with a `200 OK` status: `res.status(200).json(filteredSortedMovies);`
 */
const getMovies = (req, res, next) => {
  try {
    let moviesList = movies;

    const { genre, sortBy } = req.query;
     if (genre) {
      moviesList = moviesList.filter(
        (movie) =>
          movie.genre.toLowerCase() === genre.toLowerCase()
      );
    }
     if (sortBy === 'year') {
      moviesList.sort((a, b) => a.releaseYear - b.releaseYear);
    }

    if (sortBy === 'rating') {
      moviesList.sort((a, b) => b.rating - a.rating);
    }
    res
      .status(200)
      .json(moviesList);
  } catch (error) {
    next(error);
  }
};

/**
 * Task 17: Get a single movie by its ID
 *
 * How to implement:
 * - Extract the ID parameter from the URL: `const { id } = req.params;`
 * - Find the movie by calling moviesData.findMovieById(id).
 * - IF the movie is not found (undefined):
 *   - Return a `404 Not Found` status with JSON: `res.status(404).json({ message: `Movie with ID ${id} not found` });`
 * - ELSE (movie exists):
 *   - Return the movie object with a `200 OK` status.
 */
const getMovieById = (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = movies.find((m) => m.id === Number(id));

    if (!movie) {
      return res.status(404).json({
        message: `Movie with ID ${id} not found`,
      });
    }

    res.status(200).json(movie);
  } catch (error) {
    next(error);
  }
};

/**
 * Task 11, 12, 13: Add a new movie (POST)
 *
 * How to implement:
 * - Destructure fields from `req.body`: `const { title, genre, releaseYear, rating } = req.body;`
 * - Check for duplicates: call moviesData.findMovieByTitle(title).
 * - IF a movie with that title already exists (case-insensitive match):
 *   - Return a `400 Bad Request` status: `res.status(400).json({ message: 'A movie with this title already exists' });`
 * - IF not a duplicate, insert it by calling: `const newMovie = moviesData.addMovie({ title, genre, releaseYear, rating });`
 * - Return the newly created movie object with a `201 Created` status: `res.status(201).json(newMovie);`
 */
const createMovie = (req, res, next) => {
  try {
    const { title, genre, releaseYear, rating } = req.body;

    // check duplicate
    const existing = movies.find(
      (m) => m.title.toLowerCase() === title.toLowerCase()
    );

    if (existing) {
      return res.status(400).json({
        message: 'A movie with this title already exists',
      });
    }

    // create new movie manually
    const newMovie = {
      id: movies.length + 1,
      title,
      genre,
      releaseYear: Number(releaseYear),
      rating: Number(rating),
    };

    movies.push(newMovie);

    res.status(201).json(newMovie);
  } catch (error) {
    next(error);
  }
};

/**
 * Task 21, 23: Update an entire movie object (PUT)
 *
 * How to implement:
 * - Extract the ID parameter: `const { id } = req.params;`
 * - Destructure fields from `req.body`: `const { title, genre, releaseYear, rating } = req.body;`
 * - Verify if the movie exists first: call moviesData.findMovieById(id).
 * - IF the movie is not found:
 *   - Return a `404 Not Found` status: `res.status(404).json({ message: `Movie with ID ${id} not found` });`
 * - ELSE:
 *   - Perform the update by calling: `const updatedMovie = moviesData.updateMovie(id, { title, genre, releaseYear, rating });`
 *   - Return the updated movie object with a `200 OK` status.
 */
const updateMovie = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, genre, releaseYear, rating } = req.body;

    const index = movies.findIndex((m) => m.id === Number(id));

    if (index === -1) {
      return res.status(404).json({
        message: `Movie with ID ${id} not found`,
      });
    }

    const updatedMovie = {
      id: Number(id),
      title,
      genre,
      releaseYear: Number(releaseYear),
      rating: Number(rating),
    };

    movies[index] = updatedMovie;

    res.status(200).json(updatedMovie);
  } catch (error) {
    next(error);
  }
};

/**
 * Task 22, 23: Update only the rating of a movie (PATCH)
 *
 * How to implement:
 * - Extract the ID parameter: `const { id } = req.params;`
 * - Extract `rating` from `req.body`: `const { rating } = req.body;`
 * - Verify if the movie exists first: call moviesData.findMovieById(id).
 * - IF the movie is not found:
 *   - Return a `404 Not Found` status: `res.status(404).json({ message: `Movie with ID ${id} not found` });`
 * - ELSE:
 *   - Perform the rating update by calling: `const updatedMovie = moviesData.updateMovieRating(id, rating);`
 *   - Return the updated movie object with a `200 OK` status.
 */
const updateMovieRating = (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;

    const index = movies.findIndex((m) => m.id === Number(id));

    if (index === -1) {
      return res.status(404).json({
        message: `Movie with ID ${id} not found`,
      });
    }

    movies[index].rating = Number(rating);

    res.status(200).json(movies[index]);
  } catch (error) {
    next(error);
  }
};

/**
 * Task 26, 27, 30: Delete a movie by its ID (DELETE)
 *
 * How to implement:
 * - Extract the ID parameter: `const { id } = req.params;`
 * - Try to delete by calling: `const deletedMovie = moviesData.deleteMovie(id);`
 * - IF the deletedMovie is null (meaning the movie did not exist):
 *   - Return a `404 Not Found` status: `res.status(404).json({ message: `Movie with ID ${id} not found` });`
 * - ELSE:
 *   - Return a `200 OK` status containing a confirmation message and the deleted movie details:
 *     `res.status(200).json({ message: 'Movie deleted successfully', movie: deletedMovie });`
 */
const deleteMovie = (req, res, next) => {
  try {
    const { id } = req.params;

    const index = movies.findIndex((m) => m.id === Number(id));

    if (index === -1) {
      return res.status(404).json({
        message: `Movie with ID ${id} not found`,
      });
    }

    const deletedMovie = movies.splice(index, 1)[0];

    res.status(200).json({
      message: 'Movie deleted successfully',
      movie: deletedMovie,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  updateMovieRating,
  deleteMovie,
};
