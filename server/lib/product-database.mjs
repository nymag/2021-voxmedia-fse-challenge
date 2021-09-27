import { promises as fs } from "fs";

export class ProductDatabase {
  _products = new Map();

  constructor() {
    this._seed();
  }

  get(id) {
    return Promise.resolve(this._products.get(id));
  }

  list() {
    return Promise.resolve(Array.from(this._products.values()));
  }

  async _seed() {
    const data = await Promise.all([
      fs.readFile(new URL("data/1968-04-first.json", import.meta.url), "utf-8"),
      fs.readFile(
        new URL("data/1968-07-jewish-food.json", import.meta.url),
        "utf-8"
      ),
      fs.readFile(
        new URL("data/1976-05-gossip.json", import.meta.url),
        "utf-8"
      ),
    ]);

    this._products = data.reduce((products, jsonString) => {
      const product = JSON.parse(jsonString);
      products.set(product.agoraId, product);
      return products;
    }, new Map());
  }
}
