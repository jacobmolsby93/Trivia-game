const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://triv-rest.herokuapp.com/api/trivia/',
      changeOrigin: true,
    })
  );
};