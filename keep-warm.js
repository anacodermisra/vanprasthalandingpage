/**
 * 24/7 Keep-Warm Daemon for Vanprastha Retreat Landing Page
 * Pings both /api/health and / every 4 minutes (Render sleeps after 15 min).
 *
 * Usage:
 *   node keep-warm.js
 *   or with PM2: pm2 start keep-warm.js --name vanprastha-warmer
 */

const https = require("https");

const TARGET_URLS = [
  "https://vanprastha-retreat.onrender.com/api/health",
  "https://vanprastha-retreat.onrender.com/",
];

const INTERVAL_MS = 4 * 60 * 1000; // 4 minutes

function ping(url) {
  return new Promise((resolve) => {
    const start = Date.now();
    const req = https.get(url, { timeout: 15000 }, (res) => {
      const duration = Date.now() - start;
      console.log(`[${new Date().toLocaleTimeString()}] ✅ ${url} -> ${res.statusCode} (${duration}ms)`);
      res.resume(); // Consume data to free memory
      resolve(true);
    });

    req.on("error", (err) => {
      console.error(`[${new Date().toLocaleTimeString()}] ❌ ${url} error:`, err.message);
      resolve(false);
    });

    req.on("timeout", () => {
      req.destroy();
      console.warn(`[${new Date().toLocaleTimeString()}] ⚠️ ${url} timed out`);
      resolve(false);
    });
  });
}

async function runWarmCycle() {
  console.log(`\n--- Starting Warm Cycle: ${new Date().toISOString()} ---`);
  for (const url of TARGET_URLS) {
    await ping(url);
  }
}

// Immediate initial ping
runWarmCycle();

// Set interval
setInterval(runWarmCycle, INTERVAL_MS);
console.log(`Keep-warm monitor initialized. Pinging every ${INTERVAL_MS / 60000} minutes.`);
