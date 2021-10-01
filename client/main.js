/**
 * Parcel will load non-JS assets if we import them via a static string in the
 * URL constructor. Otherwise, it won't build the assets.
 *
 * (Q.v. https://v2.parceljs.org/languages/javascript/#url-dependencies.)
 */
const PRODUCT_IMAGES = {
  "1968-04-first-issue.jpg": new URL(
    "~/client/assets/images/1968-04-first-issue.jpg",
    import.meta.url
  ),
  "1968-07-jewish-food.jpg": new URL(
    "~/client/assets/images/1968-07-jewish-food.jpg",
    import.meta.url
  ),
  "1976-05-gossip.jpg": new URL(
    "~/client/assets/images/1976-05-gossip.jpg",
    import.meta.url
  ),
};

const fetchProduct = async () => {
  const products = await (await fetch("http://localhost:8080/products")).json();
  const rand = Math.floor(Math.random() * 3);

  return products[rand];
};

const showProduct = (product, selector) => {
  const el = document.querySelector(selector);
  if (!el) return;

  const hed = el.querySelector("h3");
  const img = el.querySelector("img");
  const imageUrl = PRODUCT_IMAGES[product.product.imageUrl];

  if (hed) hed.textContent = product.product.name;
  if (img) img.src = imageUrl;
};

(async () => {
  const product = await fetchProduct();

  showProduct(product, "#product-card-1");
})();
