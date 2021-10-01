import { promises as fs } from "fs";
import path from "path";

export class ProductDatabase {
  _products = new Map();

  constructor() {
    this._seed();
  }

  get(id) {
    if (!this._products.has(id)) {
      return Promise.reject(new Error(`Product not found: ${id}`));
    }

    return this._products.get(id);
  }

  list() {
    return Promise.resolve(Array.from(this._products.values()));
  }

  async _seed() {
    const data = await Promise.all([
      fs.readFile(path.join(__dirname, "data/1968-04-first.json"), "utf-8"),
      fs.readFile(
        path.join(__dirname, "data/1968-07-jewish-food.json"),
        "utf-8"
      ),
      fs.readFile(path.join(__dirname, "data/1976-05-gossip.json"), "utf-8"),
    ]);

    const products = data.reduce((products, jsonString) => {
      const product = JSON.parse(jsonString);
      products.set(product.productId, product);
      return products;
    }, new Map());

    this._products = products;
  }
}
