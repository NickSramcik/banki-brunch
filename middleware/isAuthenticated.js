// This middleware ensures a user is authenticated

/**
 * To use:
 * - Add any authentication check logic within the middleware function.
 * - If the user is authenticated, proceed to the next middleware or route.
 * - If not, send a relevant error response.
 */

function isAuthenticated(req, res, next) {
  // Example logic: Check if there's a user object in the session
  if (req.session && req.session.user) {
    return next();
  }
  return res.status(401).send("Unauthorized");
}
export default isAuthenticated;
