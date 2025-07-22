import ratelimit from "../config/upstash.js";

/**
 * @file This file contains the rate-limiting middleware for the Express application.
 * It uses the configured Upstash rate limiter to protect the API from excessive requests.
 */

/**
 * An Express middleware function that checks if the number of requests from a given IP
 * has exceeded the defined rate limit.
 * If the limit is exceeded, it sends a 429 "Too Many Requests" response.
 * Otherwise, it passes control to the next middleware in the stack.
 *
 * @param {object} req - The Express request object.
 * @param {object} res - The Express response object.
 * @param {function} next - The next middleware function.
 */
const rateLimiter = async (req, res, next) => {
    try {
        // A fixed key is used here, which means the rate limit is global across all users.
        // For per-IP rate limiting, you would use something like `req.ip`.
        const { success } = await ratelimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).json({
                message: "Too many requests, try again later"
            });
        }
        next();
    } catch (error) {
        console.log("Error in rate limiter middleware", error);
        // Pass the error to the next error-handling middleware
        next(error);
    }
};

export default rateLimiter;
