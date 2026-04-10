// Slider Landing Otomatis
let landing = document.querySelector(".landing");
let myImgsSrc = [
  "images/gedung/1.jpeg",
  "images/gedung/2.jpeg",
  "images/gedung/3.jpeg",
  "images/gedung/4.jpeg"
];

if (landing) {
  let counter = 0;
  const duration = 10000;
  setInterval(() => {
    // Hanya jalankan slider otomatis di index.html (landing biasa, bukan .sub)
    if (!landing.classList.contains('sub')) {
      counter = counter > 2 ? 0 : counter + 1;
      landing.style.backgroundImage = `url(${myImgsSrc[counter]})`;
    }
  }, duration);
}

// Logika Klik Detail Properties
let buttonsDetails = document.querySelectorAll(".properties .box .my-btn");
buttonsDetails.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let address = btn.parentElement.querySelector(".address").innerHTML;
    let place = btn.parentElement.querySelector("h3").innerHTML;
    let price = btn.parentElement.querySelector(".price").innerHTML;

    // SIMPAN INDEKS GAMBAR (PENTING!)
    localStorage.setItem("product-count", index + 1);
    localStorage.setItem("product-address", address);
    localStorage.setItem("product-place", place);
    localStorage.setItem("product-price", price);

    location.href = "product.html";
  });
});