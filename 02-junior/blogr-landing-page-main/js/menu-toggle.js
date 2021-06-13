// GENERATING LISTENER EVENTS
const btns = document.querySelectorAll(".nav-button");

for (i = 0; i < btns.length; i++) {
  let menuName = [...btns[i].classList][1];
  document.querySelector(`.nav-menu.${menuName}`);

  btns[i].addEventListener("click", menuToggle);
}

// functions for toggling '.active' class on menu / submenus
function menuToggle(e) {
  let menuName = [...e.target.classList];
  let targetMenu = document.querySelector(
    `.nav-menu.${menuName[menuName.length - 1]}`
  );
  if (targetMenu.classList.contains("active")) {
    removeActiveClass(targetMenu);
  } else {
    addActiveClass(targetMenu);
  }
}

function addActiveClass(target) {
  target.classList.add("active");
}

function removeActiveClass(target) {
  if (target.classList.contains("outer")) {
    // if we're closing the outer menu, we also want to close any other open menus
    [...document.querySelectorAll(".nav-menu")].forEach((nav) =>
      nav.classList.remove("active")
    );
  } else {
    target.classList.remove("active");
  }
}
