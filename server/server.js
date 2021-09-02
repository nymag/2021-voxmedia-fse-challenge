const db = require("./db");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

app.use(cors());

// 👋
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Return a list of all videos.
app.get("/videos", (req, res) => {
  return db.fetchAll().then((data) => res.send(data));
});

// Return an object which maps provider names to a list of their videos.
app.get("/providers", (req, res) => {
  res.status(404).end();
});

// Given a video id, return its data. Express exposes the ID in the URL on
// `req.params.id` (e.g., `/video/CAW1` => `req.params.id = "CAW1"). It's safe
// to assume the video ID is valid.
app.get("/video/:id", (req, res) => {
  res.status(404).end();
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
