let productCount = localStorage.getItem("product-count");
let address = localStorage.getItem("product-address");
let place = localStorage.getItem("product-place");
let price = localStorage.getItem("product-price");

// 1. Sinkronisasi Gambar Landing sesuai klik (Contoh: Card 1 -> gedung/1.jpeg)
let landingSub = document.querySelector(".landing.sub");
if (landingSub && productCount) {
  landingSub.style.backgroundImage = `url('images/gedung/${productCount}.jpeg')`;
}

// 2. Update Konten Teks dengan Pengaman
function updateEl(selector, value) {
  let el = document.querySelector(selector);
  if (el && value) el.innerHTML = value;
}

updateEl(".landing h1", address);
updateEl(".product h2", address);
updateEl(".product h2 + p", place);
updateEl(".product .price", price);

let pathEl = document.querySelector(".landing .path");
if (pathEl && address) {
  pathEl.innerHTML = `
        <a href="index.html">Home</a> / 
        <a href="index.html">Properties</a> / ${address}
    `;
}