const { createProxyMiddleware } = require("http-proxy-middleware");
const { env } = require("process");

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
  ? env.ASPNETCORE_URLS.split(";")[0]
  : "http://localhost:20604";

module.exports = function (app) {
  console.log("testestestestestestet");
  app.use(
    "/api",
    createProxyMiddleware({
      target: target,
      changeOrigin: true,
      secure: false,
    })
  );
};
