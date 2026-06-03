const express = require('express');
const router = express.Router();

/**
 * Routes: moviesRoutes
 * Purpose: Maps HTTP verbs and URI paths to validations and controllers.
 *const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// CREATE
router.post("/movies", moviesController.addMovie);

// READ
router.get("/movies", moviesController.getMovies);

// UPDATE
router.put("/movies/:id", moviesController.updateMovie);

// DELETE
router.delete("/movies/:id", moviesController.deleteMovie);

module.exports = router;

 * INSTRUCTIONS FOR IMPLEMENTORS:
 * 1. Import moviesController:
 *    - const moviesController = require('../controllers/moviesController');
 * 2. Import validator middlewares:
 *    - const { movieValidationRules, ratingValidationRules, validate } = require('../middleware/validator');
 * 3. Mount the handlers to routes. Remember to place validation middleware arrays BEFORE the controller action.
 *    - Example for validation: router.post('/', movieValidationRules, validate, moviesController.createMovie);
 */

// TODO: Import moviesController here

// TODO: Import validators (movieValidationRules, ratingValidationRules, validate) here

/**
 * Route: GET /movies
 * Description: Retrieve all movies (supports genre filter & year/rating sorting).
 * Controller Action: moviesController.getMovies
 */
router.get('/', (req, res) => {
  // Replace this placeholder mapping with: moviesController.getMovies
  res.status(501).json({ message: 'GET /movies route not bound yet' });
});

/**
 * Route: GET /movies/:id
 * Description: Retrieve a single movie by its unique numeric ID.
 * Controller Action: moviesController.getMovieById
 */
router.get('/:id', (req, res) => {
  // Replace this placeholder mapping with: moviesController.getMovieById
  res.status(501).json({ message: 'GET /movies/:id route not bound yet' });
});

/**
 * Route: POST /movies
 * Description: Add a new movie.
 * Validation Rules: movieValidationRules, validate
 * Controller Action: moviesController.createMovie
 */
router.post('/', (req, res) => {
  // Replace this placeholder mapping with validators and: moviesController.createMovie
  res.status(501).json({ message: 'POST /movies route not bound yet' });
});

/**
 * Route: PUT /movies/:id
 * Description: Update an entire movie object by its ID.
 * Validation Rules: movieValidationRules, validate
 * Controller Action: moviesController.updateMovie
 */
router.put('/:id', (req, res) => {
  // Replace this placeholder mapping with validators and: moviesController.updateMovie
  res.status(501).json({ message: 'PUT /movies/:id route not bound yet' });
});

/**
 * Route: PATCH /movies/:id/rating
 * Description: Update only the rating of an existing movie.
 * Validation Rules: ratingValidationRules, validate
 * Controller Action: moviesController.updateMovieRating
 */
router.patch('/:id/rating', (req, res) => {
  // Replace this placeholder mapping with validators and: moviesController.updateMovieRating
  res
    .status(501)
    .json({ message: 'PATCH /movies/:id/rating route not bound yet' });
});

/**
 * Route: DELETE /movies/:id
 * Description: Delete a movie by its ID.
 * Controller Action: moviesController.deleteMovie
 */
router.delete('/:id', (req, res) => {
  // Replace this placeholder mapping with: moviesController.deleteMovie
  res.status(501).json({ message: 'DELETE /movies/:id route not bound yet' });
});

module.exports = router;
