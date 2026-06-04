const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');
/**
 * Routes: moviesRoutes
 * Purpose: Maps HTTP verbs and URI paths to validations and controllers.
 *
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

router.get('/', moviesController.getMovies);

/**
 * Route: GET /movies/:id
 * Description: Retrieve a single movie by its unique numeric ID.
 * Controller Action: moviesController.getMovieById
 */
router.get('/:id', moviesController.getMovieById);

/**
 * Route: POST /movies
 * Description: Add a new movie.
 * Validation Rules: movieValidationRules, validate
 * Controller Action: moviesController.createMovie
 */
router.post('/', moviesController.createMovie);

/**
 * Route: PUT /movies/:id
 * Description: Update an entire movie object by its ID.
 * Validation Rules: movieValidationRules, validate
 * Controller Action: moviesController.updateMovie
 */
router.put('/:id', moviesController.updateMovie);

/**
 * Route: PATCH /movies/:id/rating
 * Description: Update only the rating of an existing movie.
 * Validation Rules: ratingValidationRules, validate
 * Controller Action: moviesController.updateMovieRating
 */
router.patch('/:id/rating', moviesController.updateMovieRating);

/**
 * Route: DELETE /movies/:id
 * Description: Delete a movie by its ID.
 * Controller Action: moviesController.deleteMovie
 */
router.delete('/:id', moviesController.deleteMovie);

module.exports = router;
