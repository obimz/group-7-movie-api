const { NODE_ENV } = require('../config');

function globalErrorHandler(err, req, res, next) {
  // log the complete error
  console.error(err.stack || err);

  const statusCode = err.status || err.statusCode || 500;
  const message =
    NODE_ENV === 'production' && statusCode === 500
      ? 'An unexpected error occurred.'
      : err.message || 'Internal Server Error';

  res.status(statusCode).json({
    error: {
      message,
    },
  });
}

module.exports = globalErrorHandler;
