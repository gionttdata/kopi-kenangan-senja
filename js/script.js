// Toggle class active om Navbar where Navbar can be displayed
// or hidden
const navbarNav = document.querySelector(".navbar-nav");

// When hamburger-menu clicked will toggle Navbar
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Click outside sidebar to hide Navbar (if screensize < tablet)
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
