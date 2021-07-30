const ellipsis = document.querySelector(".ellipsis__container");
let menu = document.querySelector(".ellipsis__menu");

// Toggle for ellipsis menu
ellipsis.addEventListener("click", function () {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
  } else {
    menu.classList.add("active");
  }
});

// Close again if clicking outside the menu
window.addEventListener("mouseup", function (e) {
  // Need to allow for clashes between this and previous event listener
  if (e.target != menu && !e.target.classList.contains("fa-ellipsis-v")) {
    menu.classList.remove("active");
  }
});
