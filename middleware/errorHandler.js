// This middleware handles errors

/**
 * To use:
 * - Place this middleware after all routes.
 * - Any error thrown or passed with next() or thrown in the application it will be caught here.
 */

function errorHandler(err, req, res, next) {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send("Something went wrong!");
}

export default errorHandler;
