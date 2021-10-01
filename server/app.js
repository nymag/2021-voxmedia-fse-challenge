import cors from "cors";
import express from "express";
import { ProductDatabase } from "./lib";

const app = express();
const db = new ProductDatabase();
const { PORT = 8080 } = process.env;

app.use(cors());

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
