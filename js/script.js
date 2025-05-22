document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".hamburger-icon");
  const mobileMenu = document.querySelector(".mobile-menu-items");
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});
