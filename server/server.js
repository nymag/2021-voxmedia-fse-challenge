const { getAllData } = require("./handlers");

const express = require("express");
const app = express();
const cors = require("cors");
const port = 3002;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/videos", getAllData);
// Add endpoint for getting videos by id

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
