const { get } = require("./db");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/videos", (req, res) => {
  return get().then((data) => res.send(data));
});

// Add endpoint for getting videos by id
app.get("/videos/:id", (req, res) => {
  res.status(404);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
