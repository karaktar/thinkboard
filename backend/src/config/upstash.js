import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import dotenv from 'dotenv';

/**
 * @file This file configures the rate limiter for the application using Upstash Redis.
 * It initializes a Ratelimit instance that can be used as middleware in the Express app
 * to protect against excessive requests.
 */

dotenv.config();

/**
 * The rate limiter instance.
 * It is configured to allow a maximum of 10 requests per 10-second sliding window.
 * The Redis client is configured from environment variables:
 * `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`.
 */
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export default ratelimit;
