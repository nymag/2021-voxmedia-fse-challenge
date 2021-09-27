import { ProductDatabase } from "./lib/index.mjs";
import express from "express";

const app = express();
const db = new ProductDatabase();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/products", async (req, res) => {
  const products = await db.list();
  res.send(products);
});

app.listen(8080);
