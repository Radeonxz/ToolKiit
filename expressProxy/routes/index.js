const url = require("url");
const express = require("express");
const router = express.Router();
const needle = require("needle");
const apicache = require("apicache");

// Envs
const API_BASE_URL = process.env.API_BASE_URL;
const API_KEY_NAME = process.env.API_KEY_NAME;
const API_KEY_VALUE = process.env.API_KEY_VALUE;
const API_CACHE_TIME = process.env.API_CACHE_TIME || "2 minutes";

// Init cache
let cache = apicache.middleware;

router.get("/", cache(API_CACHE_TIME), async (req, res) => {
  try {
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query
    });

    const requestUrl = `${API_BASE_URL}?${params}`;
    const apiRes = await needle("get", requestUrl);
    const resData = apiRes.body;

    // Log request for development
    if (process.env.NODE_ENV !== "production") {
      console.log(`REQUEST: ${requestUrl}`);
    }

    res.status(200).json(resData);
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
