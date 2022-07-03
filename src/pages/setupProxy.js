const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(Data) {
  Data.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};

// Not working