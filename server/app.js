import { ProductDatabase } from "./lib";
import express from "express";

const app = express();
const db = new ProductDatabase();

const { PORT = 8080 } = process.env;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/products", async (req, res) => {
  const products = await db.list();
  res.send(products);
});

app.listen(PORT, () => {
  console.log(`Express server listening on ${PORT}!`);
});
