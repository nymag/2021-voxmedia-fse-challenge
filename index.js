const { getMigratedUrl, getOriginalUrl, getAllData } = require("./handlers");

const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/all", getAllData);

app.get("/migrated", (req, res, next) => res.send(getMigratedUrl()));

app.get("/original", getOriginalUrl);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
