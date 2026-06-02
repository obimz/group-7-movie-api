const express = require('express');
const router = express.Router();

// placeholder route for movies endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Movies API router placeholder' });
});

module.exports = router;
