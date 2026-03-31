//

//

if (localStorage.getItem("theme") != null) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    document.querySelector(".theme-icon span").classList.add("active");
  } else {
    document.querySelector(".theme-icon span").classList.remove("active");
    document.body.classList.remove("dark-theme");
  }
}

document.querySelector(".theme-icon span").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    document.querySelector(".theme-icon span").classList.add("active");
  } else {
    document.querySelector(".theme-icon span").classList.remove("active");
    localStorage.setItem("theme", "light");
  }
});

//---

let landing = document.querySelector(".landing");

let myImgsSrc = [
  "images/gedung/1.jpeg",
  "images/gedung/2.jpeg",
  "images/gedung/3.jpeg",
  "images/gedung/4.jpeg"
];
const duration = 10000;

let counter = 0;
setInterval(() => {
  counter = counter > 2 ? 0 : counter;
  landing.style.backgroundImage = `url(${myImgsSrc[counter]})`;
  counter++;
}, duration);

//------------------

//-------
let buttonsDetails = document.querySelectorAll(".properties .box .my-btn");
buttonsDetails.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    let address = btn.parentElement.querySelector(".address").innerHTML;
    let place = btn.parentElement.querySelector("h3").innerHTML;
    let price = btn.parentElement.querySelector(".price").innerHTML;

    localStorage.setItem("product-count", index + 1);
    localStorage.setItem("product-address", address);
    localStorage.setItem("product-place", place);
    localStorage.setItem("product-price", price);

    location.href = "product.html";
  });
});
//-------

//
