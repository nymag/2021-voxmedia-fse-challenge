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

  if (hed) hed.textContent = product.product.name;
  if (img) img.src = product.product.imageUrl;
};

(async () => {
  const product = await fetchProduct();

  showProduct(product, "#product-card-1");
})();
