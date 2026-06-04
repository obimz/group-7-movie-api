// Custom middleware for logging requests
const logger = (req, res, next) => {
    // log every request
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

module.exports = logger;