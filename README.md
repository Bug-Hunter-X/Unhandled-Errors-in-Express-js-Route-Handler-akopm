# Express.js Unhandled Error Example

This repository demonstrates a common error in Express.js route handlers:  the lack of proper error handling for invalid inputs or missing resources.

The `bug.js` file shows a route that doesn't handle cases where the user ID is invalid or the user isn't found in the database. This can lead to unexpected behavior, crashes, or vulnerabilities.

The `bugSolution.js` file demonstrates how to handle these errors gracefully and return appropriate HTTP status codes.