function toggleMenuStatus() {
  document.querySelector(".hamburger__menu").classList.toggle("active");
}

document.querySelectorAll("button.hamburger").forEach((x) => {
  x.addEventListener("click", toggleMenuStatus);
});
