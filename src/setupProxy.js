const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/proxy',
    createProxyMiddleware({
      target: 'https://api.cardkiller.me/ck_token/',
      changeOrigin: true,
      pathRewrite: {
        '/proxy': '/',
      },
    })
  );
};