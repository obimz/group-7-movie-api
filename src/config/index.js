const dotenv = require('dotenv');
dotenv.config();

const PORT = parseInt(process.env.PORT || '3000', 10);
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  PORT,
  NODE_ENV,
};
