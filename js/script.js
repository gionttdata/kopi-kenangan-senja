// Toggle class active om Navbar where Navbar can be displayed
// or hidden
const navbarNav = document.querySelector(".navbar-nav");

// When hamburger-menu clicked will toggle Navbar
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class Active for Search Form

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  // Preventing the page scroll up back to top
  e.preventDefault();
};

// Click outside sidebar to hide Navbar (if screensize < tablet)
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
