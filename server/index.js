const { getAllData, getByID } = require("./handlers");

const express = require("express");
const app = express();
const port = 3002;

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "*");
  res.set("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/videos", getAllData);
app.get("/videos/:id", getByID);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
