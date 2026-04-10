let nums = document.querySelectorAll("section.apply .item span");
let section = document.querySelector("section.apply");
let started = false;

window.onscroll = function () {
  // Tambahkan pengecekan 'if (section)' di sini
  if (section && window.scrollY >= section.offsetTop - 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let counter = 0;
  // Pastikan goal ada dan merupakan angka untuk menghindari loop tak terhingga
  if (!goal) return;

  let count = setInterval(() => {
    counter += 2;
    el.innerHTML = counter;
    if (counter >= goal) { // Gunakan >= agar lebih aman
      el.innerHTML = goal; // Pastikan angka terakhir pas dengan goal
      clearInterval(count);
    }
  }, 2000 / goal);
}