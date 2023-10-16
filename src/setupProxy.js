const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // 프록시할 요청 경로
    createProxyMiddleware({
      target:
        "http://shinhan-stock-friends-lb-252672342.ap-northeast-2.elb.amazonaws.com", // 프록시 대상 서버 주소
      changeOrigin: true, // 프록시 대상 서버의 origin을 변경
      onProxyRes(proxyRes) {
        proxyRes.headers["Access-Control-Allow-Credentials"] = "true";
      },
    })
  );
};
