import { createProxyMiddleware } from "http-proxy-middleware";

const authServiceUrl = "http://localhost:5001"; // URL of your auth service
const bookingServiceUrl = "http://localhost:5002"; // URL of your booking service

export const setupProxies = (app: any) => {
  // Proxy for Auth Service
  app.use(
    "/api/auth",
    createProxyMiddleware({ target: authServiceUrl, changeOrigin: true })
  );

  // Proxy for Booking Service
  app.use(
    "/api/booking",
    createProxyMiddleware({ target: bookingServiceUrl, changeOrigin: true })
  );
};
