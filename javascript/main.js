var body = document.querySelector("body");
var navbar = document.querySelector(".navbar");
var navbarOverlay = document.querySelector(".overlay");

//Wait for the page to finish loading and allow CSS animations to take place
document.addEventListener("DOMContentLoaded", function() {
  body.classList.remove("preload");
});

document.querySelector(".navbar-toggle").addEventListener("click", function () {
  navbar.classList.toggle("open");
  navbarOverlay.classList.toggle("open");
  body.classList.toggle("noscroll");
});

navbarOverlay.addEventListener("click", function () {
  navbar.classList.remove("open");
  navbarOverlay.classList.remove("open");
  body.classList.remove("noscroll");
});
