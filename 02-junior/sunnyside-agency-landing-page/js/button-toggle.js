function toggleMenu() {
  const navbar = document.querySelector(".desktop-navbar");

  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
  } else {
    navbar.classList.add("active");
  }
}

document.querySelector("nav button").addEventListener("click", toggleMenu);
