const app = require('./app');
const { PORT, NODE_ENV } = require('./config');

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running in ${NODE_ENV} mode on http://127.0.0.1:${PORT}`);
});
