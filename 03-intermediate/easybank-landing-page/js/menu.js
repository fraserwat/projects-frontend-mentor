const bodyStyle = document.body.style; // saving default for when we freeze scroll

function preventScroll() {
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
  document.body.style.position = "fixed";
}

function resumeScroll() {
  document.body.style = bodyStyle;
}

// Menu activation / switch off
document.getElementById("menu").addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  document.querySelector(".nav-bg").classList.toggle("active");

  if (document.body.style.position === "fixed") {
    resumeScroll();
  } else {
    preventScroll();
  }
});
