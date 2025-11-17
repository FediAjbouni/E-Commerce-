import { createClient } from "redis"
import dotenv from "dotenv"
dotenv.config()

export const redis = createClient({
  url: process.env.upstash_redis_url
});
