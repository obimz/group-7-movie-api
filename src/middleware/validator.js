const { body, validationResult } = require('express-validator');

const movieValidationRules = [
  body('title')
    .isString()
    .withMessage('Title must be a string')
    .trim()
    .notEmpty()
    .withMessage('Title is required and cannot be empty'),
  body('genre')
    .isString()
    .withMessage('Genre must be a string')
    .trim()
    .notEmpty()
    .withMessage('Genre is required and cannot be empty'),
  body('releaseYear')
    .isInt({ min: 1888, max: new Date().getFullYear() + 5 })
    .withMessage(
      `Release Year must be an integer between 1888 and ${new Date().getFullYear() + 5}`
    ),
  body('rating')
    .isFloat({ min: 0.0, max: 10.0 })
    .withMessage('Rating must be a number between 0.0 and 10.0'),
];

const ratingValidationRules = [
  body('rating')
    .isFloat({ min: 0.0, max: 10.0 })
    .withMessage('Rating must be a number between 0.0 and 10.0'),
];

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array().map((err) => ({
      field: err.path || err.param,
      message: err.msg,
    }));
    return res.status(400).json({ errors: formattedErrors });
  }
  next();
}

module.exports = {
  movieValidationRules,
  ratingValidationRules,
  validate,
};
