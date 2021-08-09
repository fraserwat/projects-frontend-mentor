const bodyStyle = document.body.style; // saving default for when we freeze scroll
const menu = document.querySelector(".hamburger");

function toggleMenu(e) {
  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    resumeScroll();
  } else {
    e.target.classList.add("active");
    preventScroll();
  }
}

function preventScroll() {
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
  document.body.style.position = "fixed";
}

function resumeScroll() {
  document.body.style = bodyStyle;
}
