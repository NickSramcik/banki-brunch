// This middleware logs incoming requests

/**
 * To use:
 * - Place this middleware at the top of app.js to log every request before all routes.
 * - Every request will be logged with its method and URL.
 */

function logger(req, res, next) {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
}
export default logger;
