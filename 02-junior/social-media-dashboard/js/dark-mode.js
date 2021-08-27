const topLevelElements = [
  document.querySelector("header"),
  document.querySelector("aside"),
  document.querySelector("main"),
];

function darkToggle() {
  topLevelElements.forEach((elem) => {
    elem.classList.toggle("dark");
  });
}
