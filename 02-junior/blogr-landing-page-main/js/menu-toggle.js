// GENERATING LISTENER EVENTS
const btns = document.querySelectorAll(".nav-button");

for (i = 0; i < btns.length; i++) {
  // console.log(document.querySelector(`.nav-menu.${menuName}`));
  btns[i].addEventListener("click", menuToggle);
}

// PREVENT SCROLL
const bodyStyle = document.body.style; // necessary for resuming scroll
function preventScroll() {
  document.body.style.height = "100vh";
  document.body.style.overflowY = "hidden";
}
function resumeScroll() {
  document.body.style = bodyStyle;
}

// functions for toggling '.active' class on menu / submenus
function menuToggle(e) {
  let menuName = [...e.target.classList];

  let targetMenu = document.querySelector(
    `.nav-menu.${menuName[menuName.length - 1]}`
  );
  console.log(menuName, targetMenu);
  if (targetMenu.classList.contains("active")) {
    removeActiveClass(targetMenu);
  } else {
    addActiveClass(targetMenu);
    preventScroll();
  }
}

function addActiveClass(target) {
  function removeAllNonOuter(menu) {
    if (!menu.classList.contains("outer")) {
      menu.classList.remove("active");
    }
  }
  // We want to close OTHER inner menus
  [...document.querySelectorAll(".nav-menu")].forEach((nav) =>
    removeAllNonOuter(nav)
  );
  target.classList.add("active");
}

function removeActiveClass(target) {
  if (target.classList.contains("outer")) {
    // if we're closing the outer menu, we also want to close any other open menus
    [...document.querySelectorAll(".nav-menu")].forEach((nav) =>
      nav.classList.remove("active")
    );
    resumeScroll();
  } else {
    target.classList.remove("active");
  }
}
