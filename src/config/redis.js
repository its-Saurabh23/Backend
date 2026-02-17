import { Redis } from '@upstash/redis'

const redisClient = new Redis({
  url: process.env.REDIS_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

console.log("✅ Redis connected");

export default redisClient;