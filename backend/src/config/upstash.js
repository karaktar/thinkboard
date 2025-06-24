import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'

import dotenv from "dotenv";

dotenv.config();

// Create a rateLimiter that allows 10 requests per 20 seconds.

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10, "10 s"),
});



export default ratelimit;