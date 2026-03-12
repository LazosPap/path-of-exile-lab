import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const LIMIT = 5; // max requests
const WINDOW_SEC = 60; // window in seconds

export default async function handler(req, res) {
  try {
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown";

    // generate Redis key per IP
    const key = `rate_limit:${ip}`;

    // increment the counter
    const count = await redis.incr(key);

    if (count === 1) {
      // first request, set expiration
      await redis.expire(key, WINDOW_SEC);
    }

    if (count > LIMIT) {
      return res.status(429).json({ error: "Too many requests. Try again later." });
    }

    // fetch data from poe.watch
    const response = await fetch("https://api.poe.watch/leagues");
    if (!response.ok) return res.status(response.status).json({ error: "poe.watch failed" });

    const json = await response.json();
    const data = json.result ?? json;

    // optional caching for Vercel CDN
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");

    return res.status(200).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    return res.status(500).json({ error: "Internal server error", details: err.message });
  }
}
