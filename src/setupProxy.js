const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/trivia',
    createProxyMiddleware({
      target: 'https://triv-rest.herokuapp.com',
      changeOrigin: true,
    })
  );
};