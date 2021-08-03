// Define nav links and default style (to return to after disabled scrolling ends)
const bodyStyle = document.body.style;
const navLinks = document.querySelector(".nav-links");
const navbar2 = document.querySelector(".nav-open-menu");

// Prevent scrolling when window is active
function preventScroll() {
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
  document.body.style.position = "fixed";
}
function resumeScroll() {
  document.body.style = bodyStyle;
}

// toggle function
const toggleMenu = function () {
  if (navLinks.classList.contains("active")) {
    resumeScroll();
    navLinks.classList.remove("active");
    navbar2.classList.remove("active");
  } else {
    preventScroll();
    navLinks.classList.add("active");
    navbar2.classList.add("active");
  }
};

// Add listener to button
document.querySelectorAll(".hamburger").forEach(function (btn) {
  btn.addEventListener("click", toggleMenu);
});
// document.querySelector(".hamburger").
// document.querySelector(".hamburger-close").addEventListener("click", toggleMenu);
